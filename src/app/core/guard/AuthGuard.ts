import {Injectable} from '@angular/core';
import {AuthService} from '../../services/impl/auth.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable()
export class AuthGuard  implements CanActivate {
  constructor(private authenticationService: AuthService, private router: Router) {}

  public isAuthenticated(): boolean {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser && currentUser.token) {
          return true;
    }
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.isAuthenticated()) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
