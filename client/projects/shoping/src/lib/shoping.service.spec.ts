import { TestBed, inject } from '@angular/core/testing';

import { ShopingService } from './shoping.service';

describe('ShopingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopingService]
    });
  });

  it('should be created', inject([ShopingService], (service: ShopingService) => {
    expect(service).toBeTruthy();
  }));
});
