import { NgModule } from "@angular/core";
import { AboutRoutingModule } from "../../modules/routing/about-routing.module";
import { AboutComponent } from "./about.component";

@NgModule({
  imports: [AboutRoutingModule],
  declarations: [AboutComponent]
})
export class AboutModule {}
