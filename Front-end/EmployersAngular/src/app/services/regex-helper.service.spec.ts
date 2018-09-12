import { TestBed, inject } from '@angular/core/testing';

import { RegexHelperService } from './regex-helper.service';

describe('RegexHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegexHelperService]
    });
  });

  it('should be created', inject([RegexHelperService], (service: RegexHelperService) => {
    expect(service).toBeTruthy();
  }));
});
