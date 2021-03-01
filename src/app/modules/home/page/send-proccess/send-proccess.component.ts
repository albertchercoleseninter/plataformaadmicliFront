import {Component, OnInit} from '@angular/core';
import {InstallationsService} from '../../../../services/impl/installations.service';
import {Observable} from 'rxjs';
import {Installation} from '../../../../model/domain/installations';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../../services/impl/user.service';
import {ItemMessage} from '../../../../model/dto/itemMessage.model';
import {map} from 'rxjs/operators';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-send-proccess',
  templateUrl: './send-proccess.component.html',
  styleUrls: ['./send-proccess.component.scss']
})
export class SendProccessComponent implements OnInit {
  installations$: Observable<Installation[]>;
  form: FormGroup;
  title: string;

  constructor(
    private route: ActivatedRoute,
    private installationService: InstallationsService,
    private clientService: UserService,
    private messageService: MessageService,
    fb: FormBuilder) {
    this.form = fb.group({
      installation: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.installations$ = this.installationService.installations();
    this.route.queryParams.subscribe(params => {
      this.title = params.title;
      this.form.reset();
    });
  }

  onSubmit() {
    this.clientService.postItemMessage(new ItemMessage(this.form.value.installation.id, this.form.value.installation.company, this.title, this.form.value.message))
      .pipe(map(x => {
        if (x === true) {
          this.messageService.add({severity: 'success', summary: 'Información', detail: 'Ticket creado correctamente'});
        } else {
          this.messageService.add({severity: 'error', summary: 'Información', detail: 'Se ha producido un problema, intentelo más tarde'});
        }
        this.form.reset();
      }))
      .subscribe(() => {
      }, () => {
        this.form.reset();
        this.messageService.add({severity: 'error', summary: 'Información', detail: 'Se ha producido un problema, intentelo más tarde'});
      });
  }

}
