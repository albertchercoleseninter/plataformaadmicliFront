export class PromoterDto{
  id: string;
  name: string;
  email: string;
  phone: string;
  principal: number;
  uuid: string;


  constructor(name?: string, email?: string, phone?: string, principal?: number, uuid?: string) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.principal = principal;
    this.uuid = uuid;
  }
}
