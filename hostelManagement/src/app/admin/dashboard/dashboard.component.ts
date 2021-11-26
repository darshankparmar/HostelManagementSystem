import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Availability } from 'src/app/availability';
import { AdminService } from '../admin.service';

@Component({
  selector: 'admin-hostel-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  availability: Availability = {
    boysStandardRooms: 0,  // 12
    boysDeluxeRooms: 0,  // 15
    boysSuperDeluxeRooms: 0, // 10
    girlsStandardRooms: 0, // 13
    girlsDeluxeRooms: 0, // 15
    girlsSuperDeluxeRooms: 0 // 11
  };

  constructor(private router: Router, private adminService: AdminService) { 

    this.adminService.boysSuperDeluxRooms().subscribe((total) => { this.availability.boysSuperDeluxeRooms = total.length; });
    this.adminService.boysDeluxRooms().subscribe((total) => { this.availability.boysDeluxeRooms = total.length; });
    this.adminService.boysStandardRooms().subscribe((total) => { this.availability.boysStandardRooms = total.length; });
    this.adminService.girlsSuperDeluxRooms().subscribe((total) => { this.availability.girlsSuperDeluxeRooms = total.length; });
    this.adminService.girlsDeluxRooms().subscribe((total) => { this.availability.girlsDeluxeRooms = total.length; });
    this.adminService.girlsStandardRooms().subscribe((total) => { this.availability.girlsStandardRooms = total.length; });

  }

  ngOnInit(): void {
  }

}
