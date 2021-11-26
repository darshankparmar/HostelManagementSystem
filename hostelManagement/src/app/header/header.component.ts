import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { User } from '../user';

@Component({
  selector: 'hostel-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnDestroy {

  title = "Royal Care";
  user: User;
  userSubscription: Subscription;

  constructor(private authService: AuthService, private router: Router) 
  {
    this.authService.findMe().subscribe(user =>(this.user = user));
    this.userSubscription = this.authService.user.subscribe(user =>(this.user = user));
  }

  ngOnInit(): void {
  }

  logout() {
      if(confirm('Are you sure?')) {
        this.authService.logout();
        this.router.navigate(['/']);
      }
  }

  ngOnDestroy(): void {
    if(this.userSubscription) 
      this.userSubscription.unsubscribe();
  }

}
