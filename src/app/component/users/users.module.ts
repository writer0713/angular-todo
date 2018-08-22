import { UsersComponent } from "./users.component";
import { NgModule } from "@angular/core";
import { PeopleRoutingModule } from "../../modules/routing/people.module";
import { UserComponent } from "../user/user.component";
import { PersonalTodoComponent } from "../personal-todo/personal-todo.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule, PeopleRoutingModule],
  declarations: [UsersComponent, UserComponent, PersonalTodoComponent]
})
export class UsersModule {}
