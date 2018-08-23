import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./components/users/users.component";
import { PersonalTodoComponent } from "./components/personal-todo/personal-todo.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: UsersComponent
      },
      {
        path: ":userId",
        component: PersonalTodoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule {}
