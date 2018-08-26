import { Component, OnInit } from "@angular/core";
import { Todo } from "../../../shared/model/todo";
import { TodoService } from "../../../shared/services/todo.service";
import { select } from "@angular-redux/store";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"]
})
export class TodoListComponent implements OnInit {
  public todoList: Todo[];

  @select(s => s.todo.todos)
  todos;

  constructor(public todoService: TodoService) {} // end of constructor

  ngOnInit() {}
}
