import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleCssComponent } from './style-css.component';

describe('StyleCssComponent', () => {
  let component: StyleCssComponent;
  let fixture: ComponentFixture<StyleCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
