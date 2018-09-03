import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ErrorComponent } from "./components/error/error.component";
import { ErrorRoutingModule } from "./error-routing.module";

@NgModule({
  imports: [CommonModule, ErrorRoutingModule],
  declarations: [ErrorComponent],
  exports: [ErrorComponent]
})
export class ErrorModule {}
