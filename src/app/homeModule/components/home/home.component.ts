import { Component } from "@angular/core";
import { Todo } from "../../../shared/model/todo";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  title = "TODOS";

  constructor() {
    const item: Todo = new Todo("title");
  }
}
