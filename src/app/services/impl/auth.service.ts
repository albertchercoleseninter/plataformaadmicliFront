import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';

import {map} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {AuthDto} from '../../model/dto/authDto.model';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
import {LoginResetDtoModel} from '../../model/dto/LoginResetDto.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.baseUrl;
  private currentUserSubject: BehaviorSubject<AuthDto>;
  public currentUser: Observable<AuthDto>;

  constructor(private httpClient: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<AuthDto>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(login: AuthDto) {
    return this.httpClient.post<AuthDto>(this.baseUrl + '/login/generar-token', login)
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;

      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigateByUrl('/login');
  }

  resetPassword(login) {
    return this.httpClient.post<boolean>(this.baseUrl + '/login/send-mail', login);
  }

  newPassword(login: LoginResetDtoModel) {
    return this.httpClient.post<boolean>(this.baseUrl + '/login/new-password', login);
  }

  changePassword(login: LoginResetDtoModel) {
    return this.httpClient.post<boolean>(this.baseUrl + '/login/new-password-from-panel', login);
  }


}
