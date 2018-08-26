import { Action } from "redux";
import { Injectable } from "@angular/core";
import { Todo } from "../../shared/model/todo";

// export const ADD_TODO = "[TODO] ADD";
// export const REMOVE_TODO = "[TODO] REMOVE";

export interface TodoAction extends Action {
  title: string;
}

@Injectable()
export class TodoActions {
  static ADD_TODO = "[TODO] ADD";
  static REMOVE_TODO = "[TODO] REMOVE";

  add(todo: Todo): TodoAction {
    return { type: TodoActions.ADD_TODO, title: todo.title };
  }

  remove(todo: Todo): TodoAction {
    return { type: TodoActions.REMOVE_TODO, title: todo.title };
  }

  //
}
