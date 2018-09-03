import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./services/auth-guard.service";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "home",
    loadChildren: "../homeModule/home.module#HomeModule"
  },
  {
    path: "people",
    loadChildren: "../peopleModule/people.module#PeopleModule",
    canActivate: [AuthGuard]
  },
  {
    path: "about",
    loadChildren: "../aboutModule/about.module#AboutModule"
  },
  {
    path: "401",
    loadChildren: "../errorModule/error.module#ErrorModule"
  }
  { path: "**", redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
  declarations: []
})
export class CoreRoutingModule {}
