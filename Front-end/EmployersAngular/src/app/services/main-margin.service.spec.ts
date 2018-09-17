import { TestBed, inject } from '@angular/core/testing';

import { MainMarginService } from './main-margin.service';

describe('MainMarginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainMarginService]
    });
  });

  it('should be created', inject([MainMarginService], (service: MainMarginService) => {
    expect(service).toBeTruthy();
  }));
});
