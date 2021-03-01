import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/impl/auth.service';
import {LoginResetDtoModel} from '../../../model/dto/LoginResetDto.model';
import {ActivatedRoute, Router} from '@angular/router';
import {toast} from 'bulma-toast';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  form: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly  authService: AuthService,
    private readonly  route: ActivatedRoute,
    private readonly  router: Router
  ) {
    this.form = this.fb.group(
      {
        password: ['', Validators.required]
      }
    );
  }

  ngOnInit(): void {
  }

  resetPassword() {
    const password = this.form.controls.password.value;
    let token = '';
    this.route.queryParams.subscribe(params => {
      token = params.token;
    });
    if (token !== '' && token !== undefined && token !== null) {
      this.authService.newPassword(new LoginResetDtoModel('', token, password, ''))
        .subscribe(data => {
          if (data) {
            toast({
              message: 'Contraseña cambiada correctamente.',
              type: 'is-success',
              dismissible: false,
              pauseOnHover: true
            });

            setTimeout(() => {
              this.router.navigateByUrl('/');
            }, 1000);

          } else {
            toast({
              message: 'Error al cambiar la contraseña',
              type: 'is-danger',
              dismissible: false,
              pauseOnHover: true
            });
          }
        }, () => {
          toast({
            message: 'Error al cambiar la contraseña',
            type: 'is-danger',
            dismissible: false,
            pauseOnHover: true
          });
        });
    }
  }

}
