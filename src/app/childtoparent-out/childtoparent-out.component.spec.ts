import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildtoparentOutComponent } from './childtoparent-out.component';

describe('ChildtoparentOutComponent', () => {
  let component: ChildtoparentOutComponent;
  let fixture: ComponentFixture<ChildtoparentOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildtoparentOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildtoparentOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
