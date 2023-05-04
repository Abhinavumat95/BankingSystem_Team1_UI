import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnableOrBlockCustomerComponent } from './enable-or-block-customer.component';

describe('EnableOrBlockCustomerComponent', () => {
  let component: EnableOrBlockCustomerComponent;
  let fixture: ComponentFixture<EnableOrBlockCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnableOrBlockCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnableOrBlockCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
