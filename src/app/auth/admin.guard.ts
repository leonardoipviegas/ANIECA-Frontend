import { CanActivate, Router } from "@angular/router";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import * as jwt_decode from "jwt-decode";

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    const parsedToken = jwt_decode(this.authService.getToken());

    if (parsedToken.entity !== 3) {
      console.log('Unauthorized!')
      this.router.navigate(["/"]);
      return false;
    }
    return true;
  }
}
