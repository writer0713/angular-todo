import { UserActions } from "./../../redux/actions/user.action";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { User } from "../model/user";
import { IAppState } from "../../redux/stores/app.store";
import { NgRedux } from "@angular-redux/store";

@Injectable()
export class UserService {
  constructor(
    public http: HttpClient,
    private userAction: UserActions,
    private ngRedux: NgRedux<IAppState>
  ) {
    console.log("User Serivce");
  }

  public initUsers() {
    this.http
      .get("https://jsonplaceholder.typicode.com/users")
      .pipe(map(users => users as User[]))
      .subscribe(users => {
        users.forEach((user: User) => {
          this.ngRedux.dispatch(this.userAction.add(user));
        });
      });
  }
}
