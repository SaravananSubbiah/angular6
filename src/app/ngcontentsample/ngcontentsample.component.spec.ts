import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcontentsampleComponent } from './ngcontentsample.component';

describe('NgcontentsampleComponent', () => {
  let component: NgcontentsampleComponent;
  let fixture: ComponentFixture<NgcontentsampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgcontentsampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcontentsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
