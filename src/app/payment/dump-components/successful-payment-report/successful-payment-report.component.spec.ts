import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulPaymentReportComponent } from './successful-payment-report.component';

describe('LoginContainerComponent', () => {
    let component: SuccessfulPaymentReportComponent;
    let fixture: ComponentFixture<SuccessfulPaymentReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [SuccessfulPaymentReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(SuccessfulPaymentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
