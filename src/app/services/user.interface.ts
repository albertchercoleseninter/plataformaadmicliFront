import {User} from '../model/domain/user';
import {Observable} from 'rxjs';

export interface UserInterface {
    getUser(): Observable<User>;
}
