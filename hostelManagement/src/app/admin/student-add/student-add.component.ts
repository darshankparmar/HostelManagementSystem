import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../../../app/student';
import { AdminService } from '../admin.service';

@Component({
  selector: 'hostel-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  student: Student;
  roomNo: number[] = [];
  showRoomNo: boolean = false;
// Room Details
  boysSuperDeluxRooms: any[];
  boysDeluxRooms: any[];
  boysStandardRooms: any[];
  girlsSuperDeluxRooms: any[];
  girlsDeluxRooms: any[];
  girlsStandardRooms: any[];
// Room No 
  boysSuperDeluxRoomNo: number[] = [];
  boysDeluxRoomNo: number[] = [];
  boysStandardRoomNo: number[] = [];
  girlsSuperDeluxRoomNo: number[] = [];
  girlsDeluxRoomNo: number[] = [];
  girlsStandardRoomNo: number[] = [];


  studentDetails = new FormGroup({
    roomCategory : new FormControl('',[Validators.required]),
    roomNo: new FormControl('',[Validators.required]),
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    fatherName: new FormControl('',[Validators.required]),
    gender: new FormControl('',[Validators.required]),
    mobileNo: new FormControl('',[Validators.required, Validators.pattern("[7-9]{1}[0-9]{9}")]),
    fatherMobileNo: new FormControl('',[Validators.required, Validators.pattern("[7-9]{1}[0-9]{9}")]),
    email: new FormControl('',[Validators.required, Validators.email]),
    studentAdharCard: new FormControl('',[Validators.required, Validators.pattern("[0-9]{12}")]),
    fatherAdharCard: new FormControl('',[Validators.required, Validators.pattern("[0-9]{12}")]),
    currentAdress: new FormControl('',[Validators.required]),
    collegeName: new FormControl('',[Validators.required])
  });

  constructor(private router: Router, private adminService: AdminService) {
    // console.log(this.studentDetails);
    this.adminService.boysSuperDeluxRooms().subscribe((total) => { 
      for (let i of total) {
        this.boysSuperDeluxRoomNo = this.boysSuperDeluxRoomNo.concat(i.roomNo);
      }
      this.boysSuperDeluxRooms = total;
    });
    this.adminService.boysDeluxRooms().subscribe((total) => { 
      for (let i of total) {
        this.boysDeluxRoomNo = this.boysDeluxRoomNo.concat(i.roomNo);
      }
      this.boysDeluxRooms = total;
      // let uniqueSet = new Set(this.boysDeluxRoomNo);
      // this.boysDeluxRoomNo = [...uniqueSet];
    });
    this.adminService.boysStandardRooms().subscribe((total) => { 
      for (let i of total) {
        this.boysStandardRoomNo = this.boysStandardRoomNo.concat(i.roomNo);
      }
      this.boysStandardRooms = total;
    });
    this.adminService.girlsSuperDeluxRooms().subscribe((total) => { 
      for (let i of total) {
        this.girlsSuperDeluxRoomNo = this.girlsSuperDeluxRoomNo.concat(i.roomNo);
      }
      this.girlsSuperDeluxRooms = total;
    });
    this.adminService.girlsDeluxRooms().subscribe((total) => { 
      for (let i of total) {
        this.girlsDeluxRoomNo = this.girlsDeluxRoomNo.concat(i.roomNo);
      }
      this.girlsDeluxRooms = total;
    });
    this.adminService.girlsStandardRooms().subscribe((total) => { 
      for (let i of total) {
        this.girlsStandardRoomNo = this.girlsStandardRoomNo.concat(i.roomNo);
      }
      this.girlsStandardRooms = total;
    });
  }

  ngOnInit(): void {
  }

  genderOrRoomCatSelected() {
    if(this.studentDetails.getRawValue().gender != "" && this.studentDetails.getRawValue().roomCategory != "") 
    {
      this.showRoomNo = false;
      this.roomNo = [];
      if(this.studentDetails.getRawValue().gender == "male")
      {
        var roomCat = this.studentDetails.getRawValue().roomCategory;
        if(roomCat == "Super Deluxe")
        {
          this.roomNo = [];
          this.roomNo = this.roomNo.concat(this.boysSuperDeluxRoomNo);
          this.showRoomNo = true;
        }
        if(roomCat == "Deluxe")
        {
          this.roomNo = [];
          this.roomNo = this.roomNo.concat(this.boysDeluxRoomNo);
          this.showRoomNo = true;
        }
        if(roomCat == "Standard")
        {
          this.roomNo = [];
          this.roomNo = this.roomNo.concat(this.boysStandardRoomNo);
          this.showRoomNo = true;
        }
      }

      if(this.studentDetails.getRawValue().gender == "female")
      {
        var roomCat = this.studentDetails.getRawValue().roomCategory;
        if(roomCat == "Super Deluxe")
        {
          this.roomNo = [];
          this.roomNo = this.roomNo.concat(this.girlsSuperDeluxRoomNo);
          this.showRoomNo = true;
        }
        if(roomCat == "Deluxe")
        {
          this.roomNo = [];
          this.roomNo = this.roomNo.concat(this.girlsDeluxRoomNo);
          this.showRoomNo = true;
        }
        if(roomCat == "Standard")
        {
          this.roomNo = [];
          this.roomNo = this.roomNo.concat(this.girlsStandardRoomNo);
          this.showRoomNo = true;
        }
      }
    }
  }

  addStudent() {
    if(!this.studentDetails.valid) {
      alert('Please Enter Valiad Value !');
      return;
    }
    // console.log(this.studentDetails);
    const student = this.studentDetails.getRawValue();
    let roomDetail = this.boysSuperDeluxRooms.find(({ roomNo }) => roomNo == student.roomNo);
    if(roomDetail == null) {
      roomDetail = this.boysDeluxRooms.find(({ roomNo }) => roomNo == student.roomNo);
      if(roomDetail == null) {
        roomDetail = this.boysStandardRooms.find(({ roomNo }) => roomNo == student.roomNo);
        if(roomDetail == null) {
          roomDetail = this.girlsSuperDeluxRooms.find(({ roomNo }) => roomNo == student.roomNo);
          if(roomDetail == null) {
            roomDetail = this.girlsDeluxRooms.find(({ roomNo }) => roomNo == student.roomNo);
            if(roomDetail == null) {
              roomDetail = this.girlsStandardRooms.find(({ roomNo }) => roomNo == student.roomNo);
              if(roomDetail == null) {
                alert("error");
                return;
              }
            }
          }
        }
      }
    }
    student.personNo = roomDetail.personNo;
    // console.log(student);

    this.adminService.addStudent(student).subscribe(s => {
      alert(s);
      this.router.navigate(['/admin/viewStudent']);
    });
  }

  get email() {
    return this.studentDetails.get('email');
  } 

  get mobileNo() {
    return this.studentDetails.get('mobileNo');
  } 

  get fatherMobileNo() {
    return this.studentDetails.get('fatherMobileNo');
  } 

  get studentAdharCard() {
    return this.studentDetails.get('studentAdharCard');
  } 

  get fatherAdharCard() {
    return this.studentDetails.get('fatherAdharCard');
  } 

}
