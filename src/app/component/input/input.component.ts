import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { filter, debounceTime, distinct, throttleTime, distinctUntilChanged } from 'rxjs/operators';
import { Todo } from '../../model/todo';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @ViewChild('textInput') input: ElementRef;

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
    console.log(this.input);
    this.onKeyupEnter();
  }

  onKeyupEnter() {
    let input = this.input.nativeElement;
    let keyup = fromEvent(input, 'keyup');
    let enter = keyup.pipe(
      filter((ev: any) => ev.keyCode === 13),
      filter(() => input.value),
      throttleTime(600),
    );

    enter.subscribe(() => {
      let result: string = input.value;
      let todo: Todo = new Todo(result);

      console.log(todo);

      this.todoService.add(todo);

      input.value = '';
      input.focus();

    });

  }

}
