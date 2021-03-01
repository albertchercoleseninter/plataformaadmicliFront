import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../../services/impl/user.service';
import {Observable} from 'rxjs';
import {AuthService} from '../../../../services/impl/auth.service';
import {LoginResetDtoModel} from '../../../../model/dto/LoginResetDto.model';
import {OverlayPanel} from 'primeng/overlaypanel';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  user$: Observable<any>;
  labels: string[];
  show: boolean;
  password: string;
  @ViewChild('op') op: OverlayPanel;

  constructor(private userService: UserService,
              private authService: AuthService,
              private messageService: MessageService) {
    this.show = false;
    this.labels = ['Administrador', 'CIF', 'Correo', 'FAX', 'Móvil', 'Nombre', 'Teléfono', 'Provincia', 'Dirección', 'Población'];
  }

  ngOnInit(): void {
    this.user();

  }

  user() {
    this.user$ = this.userService.getUser();
  }

  showPassword() {
    this.show = !this.show;
  }

  changePassword() {
    this.authService.changePassword(new LoginResetDtoModel('', '' , this.password, '')).subscribe(r =>{
      if (r){
        this.op.hide();
        this.messageService.add({severity: 'success', summary: 'Información', detail: 'Contraseña actualizada correctamente'});
      }else{
        this.messageService.add({severity: 'error', summary: 'Información', detail: 'Se ha producido un error al cambiar la contraseña'});
      }
    });
  }
}
