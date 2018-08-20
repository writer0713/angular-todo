import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { AboutComponent } from "./component/about/about.component";
import { HomeComponent } from "./component/home/home.component";
import { InputComponent } from "./component/input/input.component";
import { NavigationComponent } from "./component/navigation/navigation.component";
import { TodoItemComponent } from "./component/todo-item/todo-item.component";
import { TodoListComponent } from "./component/todo-list/todo-list.component";
import { QuakeDirective } from "./directives/quake.directive";
import { RainbowDirective } from "./directives/rainbow.directive";
import { TodoHoverDirective } from "./directives/todo-hover.directive";
import { TodoService } from "./service/todo.service";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    InputComponent,
    TodoHoverDirective,
    QuakeDirective,
    RainbowDirective,
    HomeComponent,
    NavigationComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "about", component: AboutComponent },
      { path: "**", redirectTo: "/" }
    ])
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
