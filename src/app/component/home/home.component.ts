import { Component, OnInit } from "@angular/core";
import { Todo } from "../../model/todo";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  title = "TODOS";

  constructor() {
    const item: Todo = new Todo("title");
    console.log(item);
  }
}
