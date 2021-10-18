import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  CanActivateChild,
  Router,
} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
  isAuthucated: boolean = false;
  userData: any;
  constructor(private router: Router) {
    this.userData = localStorage.getItem('user');

    if (this.userData != null) {
         this.isAuthucated = true;
    } else {
         this.isAuthucated = false;
    }
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | import('@angular/router').UrlTree
    | import('rxjs').Observable<boolean | import('@angular/router').UrlTree>
    | Promise<boolean | import('@angular/router').UrlTree> {
    return this.canActivate(childRoute, state);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isAuthucated) {
      return true;
    } else {
      return this.router.navigate(['/']);
    }
  }
}
