export class AuthDto {
  constructor(
    private username: string,
    private password: string,
    public token?: string) {
  }
}
