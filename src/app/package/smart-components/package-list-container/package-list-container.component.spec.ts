import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageListContainerComponent } from './package-list-container.component';

describe('PackageListContainerComponent', () => {
    let component: PackageListContainerComponent;
    let fixture: ComponentFixture<PackageListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [PackageListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(PackageListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
