import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "../component/home/home.component";
import { UsersComponent } from "../component/users/users.component";
import { PersonalTodoComponent } from "../component/personal-todo/personal-todo.component";
import { AboutComponent } from "../component/about/about.component";

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
  { path: "about", loadChildren: AboutComponent },
  { path: "**", redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class CoreRoutingModule {}
