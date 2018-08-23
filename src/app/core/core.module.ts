import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationComponent } from "./navigation/navigation.component";
import { CoreRoutingModule } from "./core-routing.module";

@NgModule({
  imports: [
    // core modules
    CommonModule,
    CoreRoutingModule
  ],
  declarations: [NavigationComponent],
  exports: [NavigationComponent, CoreRoutingModule]
})
export class CoreModule {}
