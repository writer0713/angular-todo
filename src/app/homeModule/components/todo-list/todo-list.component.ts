import { Component, OnInit } from "@angular/core";
import { Todo } from "../../../shared/model/todo";
import { TodoService } from "../../../shared/services/todo.service";
import { NgRedux, select } from "@angular-redux/store";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"]
})
export class TodoListComponent implements OnInit {
  public todoList: Todo[];

  @select(s => s.todo.todos)
  todos;

  constructor(
    public todoService: TodoService,
    private ngRedux: NgRedux<Map<string, any>>
  ) {} // end of constructor

  ngOnInit() {}
}
