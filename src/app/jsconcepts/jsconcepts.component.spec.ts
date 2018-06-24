import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsconceptsComponent } from './jsconcepts.component';

describe('JsconceptsComponent', () => {
  let component: JsconceptsComponent;
  let fixture: ComponentFixture<JsconceptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsconceptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsconceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
