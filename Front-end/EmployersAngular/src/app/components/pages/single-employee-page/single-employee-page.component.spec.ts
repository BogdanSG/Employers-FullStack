import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEmployeePageComponent } from './single-employee-page.component';

describe('SingleEmployeePageComponent', () => {
  let component: SingleEmployeePageComponent;
  let fixture: ComponentFixture<SingleEmployeePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleEmployeePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleEmployeePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
