import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildparentComponent } from './viewchildparent.component';

describe('ViewchildparentComponent', () => {
  let component: ViewchildparentComponent;
  let fixture: ComponentFixture<ViewchildparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewchildparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchildparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
