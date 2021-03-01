import {AlertDtos} from '../model/dto/alertDto.model';

export interface AlertsCompositeInterface {
  createAlerts(alertDto: AlertDtos[]);
}
