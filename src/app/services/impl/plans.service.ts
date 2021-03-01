import {Injectable} from '@angular/core';
import {ActuationsInterface} from '../actuations.interface';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PartBillingDto} from '../../model/dto/partBillingDto';
import {Installation} from '../../model/domain/installations';
import {InstallationDto} from '../../model/dto/installationDto.model';

@Injectable({
  providedIn: 'root'
})
export class PlansService {
  baseUrl = environment.baseUrl;
  baseUrlParts = '/planes';

  // @ts-ignore
  constructor(private httpClient: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  annualMaintenancePlan(installationDto: InstallationDto) {
    const headers = new HttpHeaders({'Content-Type': 'application/json', responseType: 'blob'});
    return this.httpClient.post<Blob>(this.baseUrl + '/planes/plan-mantenimiento-anual', installationDto, {
      headers, responseType: 'blob' as 'json'
    });

  }
}
