import { TestBed, inject } from '@angular/core/testing';

import { WebDbService } from './web-db.service';

describe('WebDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebDbService]
    });
  });

  it('should be created', inject([WebDbService], (service: WebDbService) => {
    expect(service).toBeTruthy();
  }));
});
