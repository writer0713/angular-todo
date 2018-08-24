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

@NgModule({
  imports: [
    // core modules
    CommonModule,
    CoreRoutingModule,
    NgReduxModule
  ],
  declarations: [NavigationComponent],
  exports: [NavigationComponent, CoreRoutingModule, NgReduxModule]
})
export class CoreModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
