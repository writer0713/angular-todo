import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isAdmin: boolean = state.root.queryParamMap.get("admin") === "kim";

    if (!isAdmin) {
      this.router.navigate(["/401"]);
    }

    return isAdmin;
  }
}
