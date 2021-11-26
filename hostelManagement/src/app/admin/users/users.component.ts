import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'pm-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any[];

  constructor(private adminService: AdminService) {
    this.adminService.getAllUsers().subscribe((users) => { this.users = users; });
  }

  ngOnInit(): void {
  }

}
