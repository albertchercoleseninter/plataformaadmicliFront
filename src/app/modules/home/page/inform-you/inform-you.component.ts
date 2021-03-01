import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../services/impl/user.service';
import {Observable} from 'rxjs';
import {Notifications} from '../../../../model/domain/notifications';
import {map} from 'rxjs/operators';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-inform-you',
  templateUrl: './inform-you.component.html',
  styleUrls: ['./inform-you.component.scss']
})
export class InformYouComponent implements OnInit {
  notifications$: Observable<Notifications[]>;

  constructor(private clientService: UserService,
              private messageService: MessageService) {

  }

  ngOnInit(): void {
      this.notifications();
  }

  notifications(){
   this.notifications$ = this.clientService.notifications();
  }


  readNotification(not: Notifications) {
    this.clientService.readNotification(not.id).pipe(map(x=>{
      if(x){
        this.notifications();
        this.messageService.add({severity: 'success', summary: 'Información', detail: 'Notificación leída'});
      }
    })).subscribe();
  }
}
