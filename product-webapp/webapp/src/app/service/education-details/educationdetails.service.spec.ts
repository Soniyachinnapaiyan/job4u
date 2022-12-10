import { TestBed } from '@angular/core/testing';

import { EducationdetailsService } from './educationdetails.service';

describe('EducationdetailsService', () => {
  let service: EducationdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducationdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
