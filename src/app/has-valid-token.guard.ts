import { AppService } from './app.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HasValidTokenGuard implements CanActivate {

  constructor(
    private appService: AppService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  canActivate(
    routeSS: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.appService.validate(routeSS.queryParams.token || this.route.snapshot.queryParams.token)
      .pipe(tap((flag) => {
        if(!flag) this.router.navigate(['/error']);
      }))
      ;

  }

}
