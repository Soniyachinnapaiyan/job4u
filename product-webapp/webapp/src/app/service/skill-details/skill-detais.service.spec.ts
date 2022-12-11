import { TestBed } from '@angular/core/testing';

import { SkillDetaisService } from './skill-detais.service';

describe('SkillDetaisService', () => {
  let service: SkillDetaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillDetaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
