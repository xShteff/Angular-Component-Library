import { TestBed } from '@angular/core/testing';

import { SomeLibraryService } from './some-library.service';

describe('SomeLibraryService', () => {
  let service: SomeLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SomeLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
