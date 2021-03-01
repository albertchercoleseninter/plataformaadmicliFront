import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {InstallationInterface} from '../installation.interface';
import {Observable} from 'rxjs';
import {Installation} from '../../model/domain/installations';
import {Tree} from '../../model/domain/tree';

@Injectable({
  providedIn: 'root'
})
export class InstallationsService implements InstallationInterface {
  baseUrl = environment.baseUrl;
  baseUrlInstallation = '/installations';


  constructor(private httpClient: HttpClient) {
  }

  installations(): Observable<Installation[]> {
    return this.httpClient.get<Installation[]>(this.baseUrl + this.baseUrlInstallation);
  }

  installationsTree(): Observable<Tree> {
    return this.httpClient.get<Tree>(this.baseUrl + this.baseUrlInstallation + '/tree');
  }

}
