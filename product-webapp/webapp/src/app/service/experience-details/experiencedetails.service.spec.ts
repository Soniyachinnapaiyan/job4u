import { TestBed } from '@angular/core/testing';

import { ExperiencedetailsService } from './experiencedetails.service';

describe('ExperiencedetailsService', () => {
  let service: ExperiencedetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperiencedetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
