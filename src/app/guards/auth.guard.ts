import { Injectable } from '@angular/core';
import { CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JexiaService } from '../services/jexia.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private jexiaService: JexiaService,
    private router: Router,
  ) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const hasToken = !!this.jexiaService.getAccessToken();

    if (hasToken) {
      return true;
    } else {
      this.router.navigate(['/signin']);
      return false;
    }
  }
}
