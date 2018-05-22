import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectToBankComponent } from './redirect-to-bank.component';

describe('RedirectToBankComponent', () => {
  let component: RedirectToBankComponent;
  let fixture: ComponentFixture<RedirectToBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectToBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectToBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
