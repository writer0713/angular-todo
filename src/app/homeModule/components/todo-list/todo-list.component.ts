import { Component, OnInit } from "@angular/core";
import { Todo } from "../../../shared/model/todo";
import { TodoService } from "../../../shared/services/todo.service";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"]
})
export class TodoListComponent implements OnInit {
  public todoList: Todo[];

  constructor(public todoService: TodoService) {} // end of constructor

  ngOnInit() {}
}
