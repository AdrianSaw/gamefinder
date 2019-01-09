import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  isAuthenticated: boolean = false;

  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) {
    this.authService.isAuthenticated.subscribe((value: boolean) => {
      this.isAuthenticated = value;
    });
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (!this.isAuthenticated) {
        this.router.navigateByUrl('signin');
        return false;
      }
      return true;
  }
}
