import { TestBed } from '@angular/core/testing';

import { JexiaService } from './jexia.service';

describe('JexiaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JexiaService = TestBed.get(JexiaService);
    expect(service).toBeTruthy();
  });
});
