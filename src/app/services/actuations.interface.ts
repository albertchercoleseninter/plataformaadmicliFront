import {AlertDtos} from '../model/dto/alertDto.model';
import {PartBillingDto} from '../model/dto/partBillingDto';

export interface ActuationsInterface {
  // tslint:disable-next-line:typedef
  getSkeleton(part: PartBillingDto);
}
