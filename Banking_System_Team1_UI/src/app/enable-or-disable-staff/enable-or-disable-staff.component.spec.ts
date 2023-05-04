import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnableOrDisableStaffComponent } from './enable-or-disable-staff.component';

describe('EnableOrDisableStaffComponent', () => {
  let component: EnableOrDisableStaffComponent;
  let fixture: ComponentFixture<EnableOrDisableStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnableOrDisableStaffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnableOrDisableStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
