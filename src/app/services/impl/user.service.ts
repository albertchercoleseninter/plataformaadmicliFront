import {UserInterface} from '../user.interface';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../model/domain/user';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Commercial} from '../../model/domain/commercial';
import {ItemMessage} from '../../model/dto/itemMessage.model';
import {Notifications} from '../../model/domain/notifications';


@Injectable({
  providedIn: 'root'
})
export class UserService implements UserInterface {
  baseUrl = environment.baseUrl;
  API = '/client';

  constructor(private httpClient: HttpClient){}

  getUser(): Observable<User> {
    return this.httpClient.get<User>(this.baseUrl + this.API + '/info');
  }

  getCommercial(): Observable<Commercial>{
    return this.httpClient.get<Commercial>(this.baseUrl + this.API + '/commercial');
  }

  getCommercialImage(code: number): Observable<string>{
    return this.httpClient.post<string>(this.baseUrl + this.API + '/commercial-image', code);
  }

  postItemMessage(item: ItemMessage): Observable<boolean>{
    return this.httpClient.post<boolean>(this.baseUrl + this.API + '/send-item', item);
  }

  notifications(): Observable<Notifications[]>{
    return this.httpClient.get<Notifications[]>(this.baseUrl + this.API + '/notifications');
  }

  readNotification(id: number): Observable<Notifications>{
    return this.httpClient.post<Notifications>(this.baseUrl + this.API + '/notifications', id);
  }

}
