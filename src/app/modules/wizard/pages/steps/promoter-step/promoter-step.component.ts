import {Component, OnDestroy, OnInit} from '@angular/core';
import {PromoterDto} from '../../../../../model/dto/promoterDto.model';
import * as uuid from 'uuid';
import {SharedService} from '../../../../../shared/shared.service';
import {PromoterService} from '../../../../../services/impl/promoter.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {isNumeric} from 'rxjs/internal-compatibility';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';

@Component({
  selector: 'app-promoter-step',
  templateUrl: './promoter-step.component.html',
  styleUrls: ['./promoter-step.component.scss'],

})
export class PromoterStepComponent implements OnInit, OnDestroy {
  promoter: PromoterDto;
  promoterAux: PromoterDto;
  promoterAuxList: PromoterDto[];
  subscriptionPromoter: Subscription;
  subscriptionAuxPromoter: Subscription;

  constructor(
    private shareService: SharedService,
    private promoterService: PromoterService,
    private router: Router
  ) {
    this.promoter = new PromoterDto();
    this.promoterAux = new PromoterDto();
    this.promoterAuxList = [];
  }

  ngOnInit(): void {

    this.shareService.getActionDispatch().subscribe(action => {
      if (action === 'PROMOTER') {
        this.saveItems();
      }
    });

    this.promoterService.promoters().subscribe(data => {
     if (data !== null && data.length > 0){
       this.router.navigateByUrl('/wizard/alerts');
     }
    });
  }

  changePromoter(newValue, isPrincipal: number) {
   if (this.isNotEmpty(newValue)){
      switch (newValue.target.id) {
        case 'usernameMP':
          this.promoter.name = newValue.target.value;
          break;
        case 'emailMP':
          this.promoter.email = newValue.target.value;
          break;
        case 'phoneMP':
          this.promoter.phone = newValue.target.value;
          break;
        case 'usernameSP':
          this.promoterAux.name = newValue.target.value;
          break;
        case 'emailSP':
          this.promoterAux.email = newValue.target.value;
          break;
        case 'phoneSP':
          this.promoterAux.phone = newValue.target.value;
          break;
      }

      if ((newValue.target.id).includes('MP')) {
        this.promoter.uuid = uuid.v4();
        this.promoter.principal = isPrincipal;

      } else if (newValue.target.id.includes('SP')) {
        this.promoterAux.uuid = uuid.v4();
        this.promoterAux.principal = isPrincipal;
      }
    }
  }

  // tslint:disable-next-line:typedef
  addPromoterAux() {
    if (this.isNotEmpty(this.promoterAux.name) && this.isEmail(this.promoterAux.email) && this.isPhone(this.promoterAux.phone)){
      const promoterAuxCopy = Object.assign({}, this.promoterAux);
      this.promoterAuxList.push(promoterAuxCopy);
      this.resetPromoterAux();
    }else{
      this.resetPromoterAux();
      this.promoterService.notificationPromoter('error', 'Error', 'Existen errores en los campos del gestor opcional.');
    }

  }

  // tslint:disable-next-line:typedef
  resetPromoterAux() {
    this.promoterAux.name = '';
    this.promoterAux.phone = '';
    this.promoterAux.email = '';
    this.promoterAux.principal = 0;
  }



  // tslint:disable-next-line:typedef
  removeTag(tag) {
    this.promoterAuxList = this.promoterAuxList.filter(item => item.uuid !== tag.uuid);
  }

  saveItems() {
    if (this.isNotEmpty(this.promoter.name) && this.isEmail(this.promoter.email) && this.isPhone(this.promoter.phone)){
      this.subscriptionPromoter = this.promoterService.addPromoter(this.promoter).subscribe();

      if (this.promoterAuxList != null && this.promoterAuxList.length > 0) {
        // save all aux
        this.promoterAuxList.forEach((item: PromoterDto) => {
          const it = new PromoterDto(item.name, item.email, item.phone, item.principal, item.uuid);
          this.subscriptionAuxPromoter = this.promoterService.addPromoter(it).subscribe();
        });

      } else {
        if (this.isNotEmpty(this.promoterAux.name) && this.isEmail(this.promoterAux.email) && this.isPhone(this.promoterAux.phone)){
          this.subscriptionAuxPromoter = this.promoterService.addPromoter(this.promoterAux).subscribe();
        }
      }

    }else{
      this.promoterService.notificationPromoter('error', 'Error', 'Existen errores en los campos del gestor principal');
      this.router.navigateByUrl('/wizard/promoter');
    }


  }

  isNotEmpty(field: string): boolean{
    return field !== null && field !== '' && field !== undefined;
  }

  isEmail(email: string): boolean{
    return email.includes("@");
  }

  isPhone(phone: string): boolean{
    return !isNaN(+phone);
  }

  ngOnDestroy() {
    if (this.subscriptionPromoter != null) {
      this.subscriptionPromoter.unsubscribe();
    }
    if (this.subscriptionAuxPromoter != null) {
      this.subscriptionAuxPromoter.unsubscribe();
    }
    this.resetPromoterAux();
    this.promoterAuxList = [];
  }
}
