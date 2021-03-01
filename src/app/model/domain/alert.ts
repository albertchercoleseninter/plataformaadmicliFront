import {Channel} from './channel';
import {TypeCommunication} from './typeCommunication';
import {Promoter} from './promoter';

export class Alert{
  constructor(public id: number,
              public channel: Channel[],
              public typeCommunication: TypeCommunication[],
              public promoter: Promoter[] ){}
}
