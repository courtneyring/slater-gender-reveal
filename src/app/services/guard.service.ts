import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      console.log(state);
      console.log(route);
      if (route.routeConfig.path == 'reveal' && route.queryParams['passcode'] != 'auntiecoco') {
          return this.router.parseUrl('/');
      }
      return true;
  }
}
