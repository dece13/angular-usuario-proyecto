import { TestBed } from '@angular/core/testing';

import { PropiedadesArrendatario } from './PropiedadesArrendatario.service';

describe('PropiedadesService', () => {
  let service: PropiedadesArrendatario;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropiedadesArrendatario);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});