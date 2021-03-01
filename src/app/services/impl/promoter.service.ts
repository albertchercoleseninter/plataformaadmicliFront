import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {PromoterInterface} from '../promoter.interface';
import {PromoterDto} from '../../model/dto/promoterDto.model';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Promoter} from '../../model/domain/promoter';
import {MessageService} from 'primeng/api';

import {Tree} from '../../model/domain/tree';
import {InstallationDto} from '../../model/dto/installationDto.model';
import {InstallationPromotersDto} from '../../model/dto/installationPromotersDto.model';



@Injectable({
  providedIn: 'root'
})
export class PromoterService implements PromoterInterface {
  baseUrl = environment.baseUrl;
  baseUrlPromoter = '/promoter';

  constructor(private httpClient: HttpClient, private messageService: MessageService) {
  }

  // tslint:disable-next-line:typedef
  addPromoter(promoter: PromoterDto): Observable<boolean> {
      return this.httpClient.post<boolean>(this.baseUrl + this.baseUrlPromoter + '/promoter', promoter);
  }

  promoters(): Observable<Promoter[]> {
    return this.httpClient.get<Promoter[]>(this.baseUrl + this.baseUrlPromoter + '/promoters');
  }

  notificationPromoter(type: string, title: string, content: string) {
    this.messageService.add({severity: type, summary: title, detail: content});
  }

  treePromotersByInstallation(installation: InstallationDto): Observable<Tree> {
    return this.httpClient.post<Tree>(this.baseUrl + this.baseUrlPromoter + '/promoters-tree', installation);
  }

  promotersByInstallation(installation: InstallationDto): Observable<Promoter[]> {
    return this.httpClient.post<Promoter[]>(this.baseUrl + this.baseUrlPromoter + '/promoters-by-installation', installation);
  }

  assignPromotersToInstallations(installationPromoter: InstallationPromotersDto): Observable<boolean> {
    return this.httpClient.post<boolean>(this.baseUrl + this.baseUrlPromoter + '/promoters-assign-installations', installationPromoter);
  }

  updatePromoter(promoter: PromoterDto): Observable<boolean> {
    return this.httpClient.post<boolean>(this.baseUrl + this.baseUrlPromoter + '/update-promoter', promoter);
  }

  deletePromoter(promoter: PromoterDto): Observable<boolean> {
    return this.httpClient.post<boolean>(this.baseUrl + this.baseUrlPromoter + '/delete-promoter', promoter);
  }

  setMainPromoter(promoter: PromoterDto): Observable<boolean> {
    return this.httpClient.post<boolean>(this.baseUrl + this.baseUrlPromoter + '/main-promoter', promoter);
  }
}
