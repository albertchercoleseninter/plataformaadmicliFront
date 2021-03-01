export class LoginResetDtoModel {
  constructor(
    private email?: string,
    private token?: string,
    public password?: string,
    public url?: string) {
  }
}
