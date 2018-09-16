import { TestBed, inject } from '@angular/core/testing';

import { PhotoHelperService } from './photo-helper.service';

describe('PhotoHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotoHelperService]
    });
  });

  it('should be created', inject([PhotoHelperService], (service: PhotoHelperService) => {
    expect(service).toBeTruthy();
  }));
});
