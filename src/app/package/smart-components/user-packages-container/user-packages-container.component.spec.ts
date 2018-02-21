import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPackagesContainerComponent } from './my-packages-container.component';

describe('MyPackagesContainerComponent', () => {
  let component: MyPackagesContainerComponent;
  let fixture: ComponentFixture<MyPackagesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPackagesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPackagesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
