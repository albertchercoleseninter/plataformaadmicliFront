import {PromoterDto} from '../model/dto/promoterDto.model';

export interface PromoterInterface {
  // tslint:disable-next-line:typedef
  addPromoter(promoter: PromoterDto);
}
