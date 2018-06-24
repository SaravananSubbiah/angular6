import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexdbStorageComponent } from './indexdb-storage.component';

describe('IndexdbStorageComponent', () => {
  let component: IndexdbStorageComponent;
  let fixture: ComponentFixture<IndexdbStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexdbStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexdbStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
