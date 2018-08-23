import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Todo } from "../../../shared/model/todo";
import { TodoService } from "../../../shared/services/todo.service";

@Component({
  selector: "personal-todo",
  templateUrl: "./personal-todo.component.html",
  styleUrls: ["./personal-todo.component.css"]
})
export class PersonalTodoComponent implements OnInit {
  title = "Personal Todos";
  todos: Todo[];

  constructor(public route: ActivatedRoute, public todoService: TodoService) {
    this.route.paramMap.subscribe(params => {
      const userId: number = +params.get("userId");
      this.todoService
        .getTodosFromRemote(userId)
        .subscribe(todos => (this.todos = todos));
    });
  }

  ngOnInit() {}
}
