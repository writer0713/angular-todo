import { Action } from "redux";
import { Injectable } from "@angular/core";
import { User } from "../../peopleModule/model/user";

export interface UserAction extends Action {
  user: User;
}

@Injectable()
export class UserActions {
  static ADD_USER = "[USER] ADD";

  add(user: User): UserAction {
    return { type: UserActions.ADD_USER, user: user };
  }
}
