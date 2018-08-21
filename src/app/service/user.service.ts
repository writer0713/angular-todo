import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../model/user";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UserService {
  people: User[];

  constructor(public http: HttpClient) {}

  public getUsers() {
    return this.http
      .get("https://jsonplaceholder.typicode.com/users")
      .pipe(map(users => users as User[]));
  }
}
