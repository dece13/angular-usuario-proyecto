import { TestBed } from '@angular/core/testing';

import { UsuarioArrendatarioService } from './UsuarioArrendatario.service';

describe('UsuarioArrendatarioService', () => {
  let service: UsuarioArrendatarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioArrendatarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});