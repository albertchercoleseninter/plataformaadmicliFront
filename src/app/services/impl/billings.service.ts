import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActuationsInterface} from '../actuations.interface';
import {BillingDto, PartBillingDto, PartDto} from '../../model/dto/partBillingDto';
import {BillingsInterface} from '../billings.interface';
import {Billing} from '../../model/domain/billing';
import {Observable} from 'rxjs';

// @ts-ignore
// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class BillingsService implements BillingsInterface {
  baseUrl = environment.baseUrl;
  baseUrlParts = '/billing-part';

  // @ts-ignore
  constructor(private httpClient: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  getSkeleton() {
    return this.httpClient.get<any>('assets/billings.json')
      .toPromise()
      .then(res => res.data as Billing[])
      .then(data => data);

  }

  getCodes(part: PartBillingDto): Observable<number[]> {
    return this.httpClient.post<number[]>(this.baseUrl + this.baseUrlParts + '/billing-installations-month', part);
  }

  download(part: BillingDto): Observable<Blob> {
    const headers = new HttpHeaders({'Content-Type': 'application/json', responseType: 'blob'});
    return this.httpClient.post<Blob>(this.baseUrl + '/facturas/generar-factura', part, {
      headers, responseType: 'blob' as 'json'
    });

  }
}
