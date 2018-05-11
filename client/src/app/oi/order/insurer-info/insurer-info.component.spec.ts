import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurerInfoComponent } from './insurer-info.component';

describe('InsurerInfoComponent', () => {
  let component: InsurerInfoComponent;
  let fixture: ComponentFixture<InsurerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsurerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
