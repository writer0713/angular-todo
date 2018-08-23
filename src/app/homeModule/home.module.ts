import { SharedModule } from "./../shared/shared.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { InputComponent } from "./components/input/input.component";
import { TodoItemComponent } from "./components/todo-item/todo-item.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  declarations: [
    HomeComponent,
    InputComponent,
    TodoItemComponent,
    TodoListComponent
  ]
})
export class HomeModule {}
