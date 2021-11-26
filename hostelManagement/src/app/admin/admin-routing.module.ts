import { PricesComponent } from './prices/prices.component';
import { ViewAllStudentComponent } from './view-all-student/view-all-student.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { UsersComponent } from './users/users.component';
import { RoomStructureComponent } from './room-structure/room-structure.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AdminGuard],
      children: [
        {
          path:'',
          pathMatch:'full',
          redirectTo: '/admin/dashboard'
        },
        {
          path:'dashboard',
          pathMatch:'full',
          component: DashboardComponent
        },
        {
          path:'addStudent',
          pathMatch:'full',
          component: StudentAddComponent
        },
        {
          path:'viewStudent',
          pathMatch:'full',
          component: ViewAllStudentComponent
        },
        {
          path:'updateStudent',
          pathMatch:'full',
          component: UpdateStudentComponent
        },
        {
          path:'foodMenu',
          pathMatch:'full',
          component: FoodMenuComponent
        },
        {
          path:'inquiry',
          pathMatch:'full',
          component: InquiryComponent
        },
        {
          path:'priceDetails',
          pathMatch:'full',
          component: PricesComponent
        },
        {
          path:'users',
          pathMatch:'full',
          component: UsersComponent
        },
        {
          path:'roomStructure',
          pathMatch:'full',
          component: RoomStructureComponent
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
