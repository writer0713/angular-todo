import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Todo } from '../../model/todo';
import { fromEvent } from 'rxjs';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @ViewChild('doneBtn') doneBtn: HTMLButtonElement;
  @ViewChild('removeBtn') removeBtn: HTMLButtonElement;

  @Input('todo') todo: Todo;

  constructor(
    private todoService: TodoService
  ) { 

  }

  ngOnInit() {
    console.log('doneBtn : ', this.doneBtn);
    console.log('removeBtn : ', this.removeBtn);
  }

  onClickDoneButton(todo: Todo) {
    console.log('onClickDoneButton : ', todo);
    this.todo.isDone = !todo.isDone;
  }

  onClickRemoveButton(todo: Todo) {
    this.todoService.todos.delete(todo);
  }

}
