import { Component } from '@angular/core';
import { Todo } from './model/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODOS';

  constructor() {
    const item: Todo = new Todo('title');
    console.log(item);
  }
}
