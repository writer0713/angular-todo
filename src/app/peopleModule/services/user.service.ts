import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { User } from "../model/user";

@Injectable()
export class UserService {
  people: User[];

  constructor(public http: HttpClient) {
    console.log("User Serivce");
  }

  public getUsers() {
    return this.http
      .get("https://jsonplaceholder.typicode.com/users")
      .pipe(map(users => users as User[]));
  }
}
