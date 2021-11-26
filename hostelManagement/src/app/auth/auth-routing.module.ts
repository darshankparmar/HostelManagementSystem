import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
      children: [
        {
          path:'',
          pathMatch:'full',
          redirectTo: '/auth/SignIn'
        },
        {
          path:'SignIn',
          pathMatch:'full',
          component: SigninComponent
        },
        {
          path:'SignUp',
          pathMatch:'full',
          component: SignupComponent
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
