import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactUsService } from 'src/app/contact-us/contact-us.service';

@Component({
  selector: 'pm-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {

  queries : any = [];
  replyMsgList : any = [];
  customreplyMsgList : any = [];

  replyMessageForm = new FormGroup({
    username : new FormControl('',[Validators.required]),
    replyMsg : new FormControl('',[Validators.required]),
    contactId : new FormControl('',[Validators.required])
  });

  constructor(private contactService: ContactUsService, private router: Router) 
  { 
    this.contactService.showHistory().subscribe((contactHistory) => { this.queries = contactHistory; });
    this.contactService.replyMessageHistory().subscribe((contactReplyHistory) => { this.replyMsgList = contactReplyHistory; });
  }

  sendReplyMessage() {
    if(!this.replyMessageForm.valid) {
      console.log('Please enter a valid reply message');
      alert('Please Enter Valiad Value !');
      return;
    }
    const replyMsgForm = this.replyMessageForm.getRawValue();
    // console.log(replyMsgForm);

    this.contactService.sendReplyMessage(replyMsgForm).subscribe(s => {
      alert(s);
      window.location.reload();
    });
  }

  ngOnInit(): void {
  }

  setValue(query: any) {
    this.replyMessageForm.controls['replyMsg'].setValue(null);
    this.replyMessageForm.controls['contactId'].setValue(query._id);
    this.replyMessageForm.controls['username'].setValue(query.username);
  }

  setCustomReplyMsgList(id: string) {
    this.customreplyMsgList = this.replyMsgList.filter((a: { contactId: string; }) => a.contactId == id);
  }

}
