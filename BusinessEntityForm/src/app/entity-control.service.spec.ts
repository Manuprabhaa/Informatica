import { TestBed } from '@angular/core/testing';

import { EntityControlService } from './entity-control.service';

describe('EntityControlService', () => {
  let service: EntityControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntityControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
