import { TestBed, inject } from '@angular/core/testing';

import { BehaviorSubjectService } from './behaviour-subject.service';

describe('BehaviourSubjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BehaviorSubjectService]
    });
  });

  it('should be created', inject([BehaviorSubjectService], (service: BehaviorSubjectService) => {
    expect(service).toBeTruthy();
  }));
});
