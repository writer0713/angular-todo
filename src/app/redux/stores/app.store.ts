import { todoReducer, ITodoState, TODO_INITIAL_STATE } from "./todo.store";
import { combineReducers } from "redux";

export interface IAppState {
  todo: ITodoState;
}

export const INITIAL_STATE: IAppState = {
  todo: TODO_INITIAL_STATE
};

export const rootReducer = combineReducers({
  todo: todoReducer
});
