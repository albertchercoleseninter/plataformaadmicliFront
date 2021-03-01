import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/impl/auth.service';
import {AuthDto} from '../../model/dto/authDto.model';
import {Router} from '@angular/router';
import {toast} from 'bulma-toast';
import {PromoterService} from '../../services/impl/promoter.service';
import Captcha from 'captcha-image';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {LoginResetDtoModel} from '../../model/dto/LoginResetDto.model';
import {OverlayPanel} from 'primeng/overlaypanel';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  form: FormGroup;
  safeHtml: SafeHtml;

  formReset: FormGroup;
  codeReset: string;

  @ViewChild('op') op: OverlayPanel;

  constructor(
    private readonly fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private promoterService: PromoterService,
    private sanitizer: DomSanitizer,
  ) {
    this.form = this.fb.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required]
      }
    );
    this.formReset = this.fb.group(
      {
        code: ['', Validators.required],
        email: ['', Validators.required]
      }
    );
  }

  ngOnInit(): void {
    console.log();
  }

  submitForm() {
    const username = this.form.controls.username.value;
    const password = this.form.controls.password.value;

    if (username && password) {
      const login$ = this.authService.login(new AuthDto(username, password))
        .subscribe(
          data => {
            // this.router.navigateByUrl('/wizard');
          },
          data => {
            toast({
              message: 'Usuario o contraseña incorrecto',
              type: 'is-danger',
              dismissible: false,
              pauseOnHover: true
            });
          }
          , () => {
            this.promoterService.promoters().subscribe(data => {
              if (data !== null && data.length > 0) {
                this.router.navigateByUrl('/home');
              } else {
                this.router.navigateByUrl('/wizard');
              }
            });
          });
    }
  }

  createCaptcha() {
    const cImage = new Captcha(
      '48px Courier',
      'center',
      'middle',
      300,
      150,
      'grey',
      'white',
      5
    ).createImage();
    this.codeReset = cImage.substr(cImage.indexOf('data-key='), 15);
    this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(cImage.replace(cImage.substr(cImage.indexOf('data-key='), 15), ''));
  }

  submitReset() {
    const code = this.formReset.controls.code.value;
    const email = this.formReset.controls.email.value;
    if (this.codeReset.includes(code)) {
      this.authService.resetPassword(new LoginResetDtoModel(email, '', '', window.location.origin)).subscribe(data => {
        this.formReset.reset();
        this.op.hide();
        toast({
          message: 'Si el usuario existe, le llegará un enlace a su correo eléctronico.',
          type: 'is-info',
          dismissible: true,
          pauseOnHover: true
        });
      });
    }
  }
}
