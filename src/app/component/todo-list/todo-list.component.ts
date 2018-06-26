import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { Todo } from '../../model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todoList: Todo[];

  constructor(
    public todoService: TodoService
  ) { 

  } // end of constructor

  ngOnInit() {
  }

}
