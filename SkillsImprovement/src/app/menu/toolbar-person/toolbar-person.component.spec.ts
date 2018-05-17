import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarPersonComponent } from './toolbar-person.component';

describe('ToolbarPersonComponent', () => {
  let component: ToolbarPersonComponent;
  let fixture: ComponentFixture<ToolbarPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
