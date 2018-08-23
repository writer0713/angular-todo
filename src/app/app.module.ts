import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { QuakeDirective } from "./directives/quake.directive";
import { RainbowDirective } from "./directives/rainbow.directive";
import { TodoHoverDirective } from "./directives/todo-hover.directive";
import { CoreModule } from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent,
    TodoHoverDirective,
    QuakeDirective,
    RainbowDirective
  ],
  imports: [BrowserModule, HttpClientModule, CoreModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
