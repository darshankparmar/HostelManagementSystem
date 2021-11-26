import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminService } from './admin.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { ViewAllStudentComponent } from './view-all-student/view-all-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { PricesComponent } from './prices/prices.component';
import { UsersComponent } from './users/users.component';
import { RoomStructureComponent } from './room-structure/room-structure.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    StudentAddComponent,
    ViewAllStudentComponent,
    UpdateStudentComponent,
    FoodMenuComponent,
    InquiryComponent,
    PricesComponent,
    UsersComponent,
    RoomStructureComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AdminService
  ]
})
export class AdminModule { }
