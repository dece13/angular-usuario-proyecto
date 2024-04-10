import { TestBed } from '@angular/core/testing';

import { usuarioArrendadorService } from './usuarioArrendador.service';

describe('PipolService', () => {
  let service: usuarioArrendadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(usuarioArrendadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});