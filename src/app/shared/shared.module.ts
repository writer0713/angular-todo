import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TodoService } from "./services/todo.service";
import { TodoHoverDirective } from "./directives/todo-hover.directive";
import { QuakeDirective } from "./directives/quake.directive";
import { RainbowDirective } from "./directives/rainbow.directive";

@NgModule({
  imports: [CommonModule],
  declarations: [TodoHoverDirective, QuakeDirective, RainbowDirective],
  exports: [TodoHoverDirective, QuakeDirective, RainbowDirective],
  providers: [TodoService]
})
export class SharedModule {}
