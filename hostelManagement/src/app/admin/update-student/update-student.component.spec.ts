import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStudentComponent } from './update-student.component';

describe('UpdateStudentComponent', () => {
  let component: UpdateStudentComponent;
  let fixture: ComponentFixture<UpdateStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
