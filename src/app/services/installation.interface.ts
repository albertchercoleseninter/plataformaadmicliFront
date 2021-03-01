import {Observable} from 'rxjs';
import {Installation} from '../model/domain/installations';

export interface InstallationInterface {
  installations(): Observable<Installation[]>;

}
