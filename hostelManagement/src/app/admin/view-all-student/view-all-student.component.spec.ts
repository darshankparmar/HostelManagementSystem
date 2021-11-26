import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllStudentComponent } from './view-all-student.component';

describe('ViewAllStudentComponent', () => {
  let component: ViewAllStudentComponent;
  let fixture: ComponentFixture<ViewAllStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
