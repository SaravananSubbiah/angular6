import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsOneComponent } from './bs-one.component';

describe('BsOneComponent', () => {
  let component: BsOneComponent;
  let fixture: ComponentFixture<BsOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
