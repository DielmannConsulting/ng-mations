import { TestBed } from '@angular/core/testing';

import { NgMationsService } from './ng-mations.service';

describe('NgMationsService', () => {
  let service: NgMationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgMationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
