import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Todo } from "../model/todo";
import { NgRedux } from "@angular-redux/store";
import { IAppState } from "../../redux/stores/app.store";
import { ADD_TODO, REMOVE_TODO } from "../../redux/actions/todo.action";

@Injectable()
export class TodoService {
  todos: Map<Todo, Todo>;

  constructor(public http: HttpClient, private ngRedux: NgRedux<IAppState>) {}

  public getTodosFromRemote(userId: number) {
    return this.http
      .get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
      .pipe(map(todos => todos as Todo[]));
  }

  public add(todo: Todo) {
    this.ngRedux.dispatch({ type: ADD_TODO, title: todo.title });
  }

  public remove(todo: Todo) {
    this.ngRedux.dispatch({ type: REMOVE_TODO, title: todo.title });
  }
}
