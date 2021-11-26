import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/student';
import { ViewAllStudentService } from './view-all-student.service';

@Component({
  selector: 'view-all-student',
  templateUrl: './view-all-student.component.html',
  styleUrls: ['./view-all-student.component.css',
    '../student-add/student-add.component.css'
  ]
})


export class ViewAllStudentComponent implements OnInit {

  students: Student[] = [];
  msg: string;

  maleStudents: Student[] = [];
  superDeluxeRoomsMaleStudents: Student[] = [];
  deluxeRoomsMaleStudents: Student[] = [];
  standardRoomsMaleStudents: Student[] = [];

  femaleStudents: Student[] = [];
  superDeluxeRoomsFemaleStudents: Student[] = [];
  deluxeRoomsFemaleStudents: Student[] = [];
  standardRoomsFemaleStudents: Student[] = [];

  searchRooms: Student[] = [];
  searchIsDone: boolean = false;
  searchmsg: string = "No Student Found!!";

  rNoForSearch = new FormGroup({
    rNo: new FormControl('',[Validators.required])
  });

  constructor(private viewAllStudentService: ViewAllStudentService, private router: Router) 
  { 
    this.viewAllStudentService.findStudent()
    .subscribe((studentsDetail) => {
        this.students = studentsDetail;
        this.students.sort((a, b) => (a.roomNo > b.roomNo) ? 1 : -1);
        this.students = this.students.filter(a=> a.isStatus !== false);
        
        this.femaleStudents = this.students.filter(a=> a.gender == "female");
        this.superDeluxeRoomsFemaleStudents = this.femaleStudents.filter(a => a.roomCategory == "Super Deluxe");
        this.deluxeRoomsFemaleStudents = this.femaleStudents.filter(a => a.roomCategory == "Deluxe");
        this.standardRoomsFemaleStudents = this.femaleStudents.filter(a => a.roomCategory == "Standard");

        this.maleStudents = this.students.filter(a=> a.gender == "male");
        this.superDeluxeRoomsMaleStudents = this.maleStudents.filter(a => a.roomCategory == "Super Deluxe");
        this.deluxeRoomsMaleStudents = this.maleStudents.filter(a => a.roomCategory == "Deluxe");
        this.standardRoomsMaleStudents = this.maleStudents.filter(a => a.roomCategory == "Standard");

        this.msg = 'There is not a single student';
      }
    );
  }

  ngOnInit(): void {
  }

  searchRoomNo() 
  {
    this.searchIsDone = false;
    if(!this.rNoForSearch.valid) {
      alert('please enter roomNo');
      return;
    }
    const roomNoDetails = this.rNoForSearch.getRawValue();
    this.searchRooms = this.students.filter(a => a.roomNo == roomNoDetails.rNo);
    this.searchIsDone = true;
  }

  get rNo() {
    return this.rNoForSearch.get('rNo');
  }

}
