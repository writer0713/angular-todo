import { Injectable } from '@angular/core';
import { Todo } from 'src/app/model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Map<Todo, Todo>;
  
  constructor() { 
    this.todos = new Map<Todo, Todo>();
  }

  public getTodoList(): Todo[] {
    return Array.from(this.todos.values());
  }

  public add(todo: Todo) {
    this.todos.set(todo, todo);
  }

  public remove(todo: Todo) {
    this.todos.delete(todo);
  }
}
