import { TodoActions } from "./../../redux/actions/todo.action";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Todo } from "../model/todo";
import { NgRedux } from "@angular-redux/store";
import { IAppState } from "../../redux/stores/app.store";

@Injectable()
export class TodoService {
  todos: Map<Todo, Todo>;

  constructor(
    public http: HttpClient,
    private ngRedux: NgRedux<IAppState>,
    private todoAction: TodoActions
  ) {}

  public getTodosFromRemote(userId: number) {
    return this.http
      .get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
      .pipe(map(todos => todos as Todo[]));
  }

  public add(todo: Todo) {
    this.ngRedux.dispatch(this.todoAction.add(todo));
  }

  public remove(todo: Todo) {
    this.ngRedux.dispatch(this.todoAction.remove(todo));
  }
}
