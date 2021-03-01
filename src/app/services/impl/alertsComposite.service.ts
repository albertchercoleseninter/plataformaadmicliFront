import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Alert} from '../../model/domain/alert';
import {AlertsCompositeInterface} from '../alertsComposite.interface';
import {AlertDtos, AlertPromoterDto} from '../../model/dto/alertDto.model';

@Injectable({
  providedIn: 'root'
})
export class AlertsCompositeService implements AlertsCompositeInterface{
  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) {

  }

  public alerts(): Observable<Alert[]> {
    return this.httpClient.get<Alert[]>(this.baseUrl + '/alerts');
  }

  /**
   * insert Alerts Defaults
   */
  public alertsDefaults(): Observable<boolean> {
    return this.httpClient.get<boolean>(this.baseUrl + '/alerts-default');
  }


  /**
   * find Alerts by User
   */
  public alertsByUser(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + '/alerts-default-by-user');
  }

  /** Insert alerts into database
   * @param alertDto
   */
  createAlerts(alertDto: AlertDtos[]): Observable<AlertPromoterDto[]> {
    return this.httpClient.post<AlertPromoterDto[]>(this.baseUrl + '/alerts', alertDto);
  }




}
