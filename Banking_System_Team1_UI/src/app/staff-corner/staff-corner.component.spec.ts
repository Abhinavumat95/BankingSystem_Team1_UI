import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffCornerComponent } from './staff-corner.component';

describe('StaffCornerComponent', () => {
  let component: StaffCornerComponent;
  let fixture: ComponentFixture<StaffCornerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffCornerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
