import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  // user: User;
  routeURL: string;

  constructor(private router: Router, private authService: AuthService) 
  {
    // initialize 'routeURL' with current route URL
    this.routeURL = this.router.url;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
      return new Promise((resolve, reject) => {
        this.authService.findMe().subscribe((user) => {
          // console.log('user', user);
          if (user?.role == 'User' && this.routeURL !== '/SignIn') {
            this.routeURL = '/';

            this.router.navigate(['/']);
            return resolve(false);
          } else {
            // console.log(`done`);
            this.routeURL = this.router.url;
            return resolve(true);
          }
        });

        // this.router.navigate(['/']);

      });
  }
}
