import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UsersComponent } from "./components/users/users.component";
import { UserComponent } from "./components/user/user.component";
import { PersonalTodoComponent } from "./components/personal-todo/personal-todo.component";
import { PeopleRoutingModule } from "./people-routing.module";
import { UserService } from "./services/user.service";

@NgModule({
  imports: [CommonModule, RouterModule, PeopleRoutingModule],
  declarations: [UsersComponent, UserComponent, PersonalTodoComponent],
  exports: [UsersComponent, UserComponent, PersonalTodoComponent],
  providers: [UserService]
})
export class PeopleModule {}
