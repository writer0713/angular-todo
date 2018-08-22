import { NgModule } from "@angular/core";
import { UsersComponent } from "../../component/users/users.component";
import { PersonalTodoComponent } from "../../component/personal-todo/personal-todo.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "people",
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
