import { TodoService } from "./../../service/todo.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Todo } from "../../model/todo";

@Component({
  selector: "personal-todo",
  templateUrl: "./personal-todo.component.html",
  styleUrls: ["./personal-todo.component.css"]
})
export class PersonalTodoComponent implements OnInit {
  title = "Personal Todos";
  todos: Todo[];

  constructor(public route: ActivatedRoute, public todoService: TodoService) {
    console.log("constructor");

    this.route.paramMap.subscribe(params => {
      console.log(params);

      const userId: number = +params.get("userId");
      this.todoService
        .getTodosFromRemote(userId)
        .subscribe(todos => (this.todos = todos));
    });
  }

  ngOnInit() {}
}
