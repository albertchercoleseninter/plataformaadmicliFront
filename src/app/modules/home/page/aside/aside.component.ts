import {Component, OnInit} from '@angular/core';
import {transition, trigger, useAnimation} from '@angular/animations';
import {flipInY} from 'ngx-animate/lib';
import {UserService} from '../../../../services/impl/user.service';
import {Commercial} from '../../../../model/domain/commercial';
import {DomSanitizer} from '@angular/platform-browser';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
  animations: [
    trigger('flipInY', [transition('* => *', useAnimation(flipInY))])
  ],
})
export class AsideComponent implements OnInit {
  flipInY: any;
  commercial: Commercial = null;
  imageCommercial: string = '';

  constructor(private clientService: UserService, private sanitizer: DomSanitizer) {
    this.commercial = new Commercial('', '', '', '', 0);
  }

  ngOnInit(): void {
    this.clientService.getCommercial().pipe(map(x => {
      this.commercial = x;
      this.clientService.getCommercialImage(+this.commercial.code).pipe(map(img => {
        this.imageCommercial = img['photo'];
      })).subscribe();
    })).subscribe();
  }

}
