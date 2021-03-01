import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActuationsInterface} from '../actuations.interface';
import {PartBillingDto, PartDto} from '../../model/dto/partBillingDto';
import {Observable} from 'rxjs';


// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class PartsService implements ActuationsInterface {
  baseUrl = environment.baseUrl;
  baseUrlParts = '/billing-part';

  // @ts-ignore
  constructor(private httpClient: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  getSkeleton() {
    return this.httpClient.get<any>('assets/parts.json')
      .toPromise()
      .then(res => res.data as PartBillingDto[])
      .then(data => data);

  }

  getCodes(part: PartBillingDto): Observable<number[]> {
    return this.httpClient.post<number[]>(this.baseUrl + this.baseUrlParts + '/code-installations-parts', part);
  }

  download(part: PartDto): Observable<Blob> {
    const headers = new HttpHeaders({'Content-Type': 'application/json', responseType: 'blob'});
    return this.httpClient.post<Blob>(this.baseUrl + '/partes/generar-parte', part, {
      headers, responseType: 'blob' as 'json'
    });

  }

  months(): string[] {
    return ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  }
}
