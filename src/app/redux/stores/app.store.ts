import { todoReducer, ITodoState, TODO_INITIAL_STATE } from "./todo.store";
import { combineReducers } from "redux";
import { USER_INITIAL_STATE, IUserState, userReducer } from "./user.store";

export interface IAppState {
  todo: ITodoState;
  user: IUserState;
}

export const INITIAL_STATE: IAppState = {
  todo: TODO_INITIAL_STATE,
  user: USER_INITIAL_STATE
};

export const rootReducer = combineReducers({
  todo: todoReducer,
  user: userReducer
});
