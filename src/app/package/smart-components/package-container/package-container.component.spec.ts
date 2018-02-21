import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageContainerComponent } from './package-container.component';

describe('PackageContainerComponent', () => {
  let component: PackageContainerComponent;
  let fixture: ComponentFixture<PackageContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
