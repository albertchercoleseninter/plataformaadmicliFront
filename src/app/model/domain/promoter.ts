import {Channel} from './channel';

export class Promoter{

  constructor(public id?: number,
              public name?: string,
              public phone?: string,
              public email?: string,
              public principal?: boolean,
              public checked?: boolean,
              public idCommunication?: number,
              public channel?: Channel[]
  ){}
}
