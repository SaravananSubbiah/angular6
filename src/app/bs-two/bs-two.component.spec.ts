import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsTwoComponent } from './bs-two.component';

describe('BsTwoComponent', () => {
  let component: BsTwoComponent;
  let fixture: ComponentFixture<BsTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
