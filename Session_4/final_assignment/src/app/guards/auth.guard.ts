import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const jwt = localStorage.getItem('access_token');
  if (jwt) {
    return true;
  }

  router.navigate(['']);
  console.log('JWT not found');
  return false;
};
