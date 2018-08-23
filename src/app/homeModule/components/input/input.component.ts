import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { fromEvent } from "rxjs";
import { filter, throttleTime } from "rxjs/operators";
import { Todo } from "../../../shared/model/todo";
import { TodoService } from "../../../shared/services/todo.service";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"]
})
export class InputComponent implements OnInit {
  @ViewChild("textInput")
  input: ElementRef;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    console.log(this.input);
    this.onKeyupEnter();
  }

  onKeyupEnter() {
    const input = this.input.nativeElement;
    const keyup = fromEvent(input, "keyup");
    const enter = keyup.pipe(
      filter((ev: any) => ev.keyCode === 13),
      filter(() => input.value),
      throttleTime(600)
    );

    enter.subscribe(() => {
      const result: string = input.value;
      const todo: Todo = new Todo(result);

      console.log(todo);

      this.todoService.add(todo);

      input.value = "";
      input.focus();
    });
  }
}
