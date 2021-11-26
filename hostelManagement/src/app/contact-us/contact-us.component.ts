import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactUsService } from './contact-us.service';

@Component({
  selector: 'hostel-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  private apiUrl = 'http://localhost:4050/api/contactUs/';
  user: User;

  contactHistory: any = [];
  replyMsgList : any = [];
  totalReplyMsg : number = 0;

  contactFormGroup = new FormGroup({
    title : new FormControl('',[Validators.required]),
    query : new FormControl('',[Validators.required])
  });

  constructor(private authService: AuthService, private router: Router, private contactService: ContactUsService) 
  { 
    this.authService.findMe().subscribe(user =>(this.user = user));
    this.showHistory();

    this.contactService.replyMessageHistory().subscribe((contactReplyHistory) => { 
      this.replyMsgList = contactReplyHistory.filter((a: { username: string; }) => a.username == this.user.username);
      this.totalReplyMsg = this.replyMsgList.length;
    });
  }

  contactFormSubmit() {
    if(!this.contactFormGroup.valid) {
      alert('Please Enter Valiad Value !');
      return;
    }
    const contactForm = this.contactFormGroup.getRawValue();
    contactForm.username = this.user.username;
    // console.log(contactForm);
    this.contactService.insertContactForm(contactForm).subscribe(s => {
      alert(s);
      this.router.navigate(['/']);
    } );
  }

  showHistory() {
    // console.log('showHistory');
    this.contactService.showHistory()
    .subscribe((contactHistory) => {
        this.contactHistory = contactHistory;
        this.contactHistory = this.contactHistory.filter((item: { username: string; }) => (item.username == this.user.username));
        // console.log(this.contactHistory);
      }
    );
  }

  ngOnInit(): void {
  }

}
