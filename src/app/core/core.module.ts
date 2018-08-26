import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationComponent } from "./navigation/navigation.component";
import { CoreRoutingModule } from "./core-routing.module";
import { NgReduxModule, NgRedux } from "@angular-redux/store";
import {
  IAppState,
  INITIAL_STATE,
  rootReducer
} from "../redux/stores/app.store";
import { TodoActions } from "../redux/actions/todo.action";
import { UserActions } from "../redux/actions/user.action";

@NgModule({
  imports: [
    // core modules
    CommonModule,
    CoreRoutingModule,
    NgReduxModule
  ],
  declarations: [NavigationComponent],
  providers: [TodoActions, UserActions],
  exports: [NavigationComponent, CoreRoutingModule, NgReduxModule]
})
export class CoreModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
