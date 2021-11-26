import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomStructureComponent } from './room-structure.component';

describe('RoomStructureComponent', () => {
  let component: RoomStructureComponent;
  let fixture: ComponentFixture<RoomStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
