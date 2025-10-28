import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

export const routerGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree => {
  const router = inject(Router);
  if (state.url.startsWith(`/subroute/subsub`)) {
    return true;
  }
  return router.createUrlTree(['subroute', 'subsub'], { queryParams: route.queryParams });
};
