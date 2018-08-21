export class User {
  constructor(
    public id: number,
    public profileImg: string,
    public name: string,
    public username: string,
    public email: string,
    public address: Address,
    public phone: string,
    public website: string,
    public company: Company
  ) {}
}

class Address {
  public street: string;
  public suite: string;
  public city: string;
  public zipcode: string;
  public geo: object;
}

class Geo {
  public lat: string;
  public lng: string;
}

class Company {
  public name: string;
  public catchPhrase: string;
  public bs: string;
}
