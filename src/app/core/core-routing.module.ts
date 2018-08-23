import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "home",
    loadChildren: "../homeModule/home.module#HomeModule"
  },
  {
    path: "people",
    loadChildren: "../peopleModule/people.module#PeopleModule"
  },
  {
    path: "about",
    loadChildren: "../aboutModule/about.module#AboutModule"
  },
  { path: "**", redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class CoreRoutingModule {}
