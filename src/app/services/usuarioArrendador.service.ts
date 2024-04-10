import { Injectable } from '@angular/core';
import { usuarioArrendador } from '../models/usuarioArredendador';
import { Observable, of } from 'rxjs';

import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class usuarioArrendadorService {

  constructor() { }


  getArrendadorInterno(): Observable< usuarioArrendador[] > {
    return of([
      new usuarioArrendador(1, "Palblo", "Márquez",20, "palomar@gmail.com",3123123,0),
      new usuarioArrendador(2, "Malría", "Pacheco",20, "marrpache@gmail.com",3424242,0),
      new usuarioArrendador(3, "Frañncisco", "Márquez",20, "franmark@gmail.com",434244,0),
      new usuarioArrendador(4, "Milguel", "Márquez",20, "miguer@gmail.com",31241241,0),
    ]);
  }

  getArrendadorExterno(): Promise< usuarioArrendador[] > {
    return axios.get< usuarioArrendador[] >('http://localhost:8080/grupo13/logingFormulario').then(response => response.data);
  }
}