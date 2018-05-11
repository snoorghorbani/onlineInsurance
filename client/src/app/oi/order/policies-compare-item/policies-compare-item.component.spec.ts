import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliciesCompareItemComponent } from './policies-compare-item.component';

describe('PoliciesCompareItemComponent', () => {
  let component: PoliciesCompareItemComponent;
  let fixture: ComponentFixture<PoliciesCompareItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliciesCompareItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliciesCompareItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
