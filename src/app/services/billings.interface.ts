import {PartBillingDto} from '../model/dto/partBillingDto';

export interface BillingsInterface {
  // tslint:disable-next-line:typedef
  getSkeleton(part: PartBillingDto);
}
