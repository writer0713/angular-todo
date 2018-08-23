import { AboutModule } from "./../aboutModule/about.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationComponent } from "./navigation/navigation.component";
import { CoreRoutingModule } from "./core-routing.module";
import { HomeModule } from "../homeModule/home.module";
import { PeopleModule } from "../peopleModule/people.module";

@NgModule({
  imports: [
    // core modules
    CommonModule,
    CoreRoutingModule

    // third modules
    // HomeModule,
    // PeopleModule,
    // AboutModule
  ],
  declarations: [NavigationComponent],
  exports: [NavigationComponent, CoreRoutingModule]
})
export class CoreModule {}
