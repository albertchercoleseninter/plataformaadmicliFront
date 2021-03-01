import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Router} from '@angular/router';


export interface Quick {
  url: string;
  back: boolean;
}


@Injectable({
  providedIn: 'root'
})

export class SharedService {

  private url = new Subject<Quick>();
  sharedCurrentUrl = this.url.asObservable();

  private actionDispatch = new Subject<string>();

  constructor(private router: Router) {
  }

  nextCurrentUrl(backPress: boolean) {
    const href = this.router.url;
    const quick = {url: href, back: backPress};
    this.url.next(quick);
  }

  public getActionDispatch(): Observable<string> {
    return this.actionDispatch.asObservable();
  }

  public setActionDispatch(message: string) {
    return this.actionDispatch.next(message);
  }

}
