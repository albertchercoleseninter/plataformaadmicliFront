import {User} from './user';

export class Installation {
  constructor(public id: string, public street: string, private town: string, private province: string, public client: User, public company?: number) {
  }

}


