import {Promoter} from '../domain/promoter';
import {Channel} from '../domain/channel';


export class AlertPromoterDto {

  constructor(public id: number,
              public promoter: Promoter[]){}
}

export class AlertChannelDto{
  constructor(public id: number,
              public channel: Channel){}
}

export class AlertDtos{
  constructor(public promoter: AlertPromoterDto, public channel: AlertChannelDto){}
}


