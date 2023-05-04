import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityQuestionMismatchComponent } from './security-question-mismatch.component';

describe('SecurityQuestionMismatchComponent', () => {
  let component: SecurityQuestionMismatchComponent;
  let fixture: ComponentFixture<SecurityQuestionMismatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityQuestionMismatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityQuestionMismatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
