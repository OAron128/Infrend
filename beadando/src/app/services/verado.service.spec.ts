import { TestBed } from '@angular/core/testing';

import {VeradoService} from './verado.service';


describe('VeradoService', () => {
  let service: VeradoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeradoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
