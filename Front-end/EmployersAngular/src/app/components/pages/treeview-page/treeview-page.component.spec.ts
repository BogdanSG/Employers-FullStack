import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeviewPageComponent } from './treeview-page.component';

describe('TreeviewPageComponent', () => {
  let component: TreeviewPageComponent;
  let fixture: ComponentFixture<TreeviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeviewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
