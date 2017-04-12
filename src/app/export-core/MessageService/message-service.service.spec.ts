import { TestBed, inject } from '@angular/core/testing';

import { MessageServiceService } from './message-service.service';

describe('MessageServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageServiceService]
    });
  });

  it('should ...', inject([MessageServiceService], (service: MessageServiceService) => {
    expect(service).toBeTruthy();
  }));
});
