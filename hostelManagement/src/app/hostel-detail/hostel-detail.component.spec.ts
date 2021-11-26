import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelDetailComponent } from './hostel-detail.component';

describe('HostelDetailComponent', () => {
  let component: HostelDetailComponent;
  let fixture: ComponentFixture<HostelDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostelDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
