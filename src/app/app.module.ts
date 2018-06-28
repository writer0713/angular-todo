import { TodoService } from './service/todo.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { TodoItemComponent } from './component/todo-item/todo-item.component';
import { InputComponent } from './component/input/input.component';
import { TodoHoverDirective } from './directives/todo-hover.directive';
import { QuakeDirective } from './directives/quake.directive';
import { RainbowDirective } from './directives/rainbow.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    InputComponent,
    TodoHoverDirective,
    QuakeDirective,
    RainbowDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
