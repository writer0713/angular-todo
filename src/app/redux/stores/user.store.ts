import { tassign } from "tassign";
import { User } from "../../peopleModule/model/user";
import { UserAction, UserActions } from "../actions/user.action";

export interface IUserState {
  users: User[];
}

export const USER_INITIAL_STATE: IUserState = {
  users: []
};

export function userReducer(
  state: IUserState = USER_INITIAL_STATE,
  action: UserAction
): IUserState {
  switch (action.type) {
    case UserActions.ADD_USER:
      return addUser(state, action);

    default:
      return state;
  }
}

function addUser(state: IUserState, action: UserAction) {
  return tassign(state, {
    users: state.users.concat(action.user)
  });
}
