import { TestBed, inject } from '@angular/core/testing';

import { Map2Service } from './map2.service';

describe('Map2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Map2Service]
    });
  });

  it('should ...', inject([Map2Service], (service: Map2Service) => {
    expect(service).toBeTruthy();
  }));
});
