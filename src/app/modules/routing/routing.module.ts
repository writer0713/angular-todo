import { AboutComponent } from "./../../component/about/about.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "../../component/home/home.component";
import { PersonalTodoComponent } from "../../component/personal-todo/personal-todo.component";
import { UsersComponent } from "../../component/users/users.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
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
  },
  { path: "about", component: AboutComponent },
  { path: "**", redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule {}
