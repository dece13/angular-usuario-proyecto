import { Injectable } from '@angular/core';
import { usuarioArrendador } from '../models/usuarioArredendador';

import { Observable, of } from 'rxjs';

import axios from 'axios';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class usuarioArrendadorService {

  private apiUrl = 'http://localhost:8080/grupo13/logingFormulario'; // URL del backend

  constructor() { }

  // Método para enviar los datos del arrendador al backend
  async agregarArrendador(arrendador: usuarioArrendador): Promise<usuarioArrendador> {
    try {
      const response = await axios.post<usuarioArrendador>('http://localhost:8080/grupo13/logingFormulario', arrendador);
      return response.data;
    } catch (error) {
      console.error('Error al agregar arrendador:', error);
      throw error;
    }
  }

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

  async actualizarArrendador(arrendador: usuarioArrendador): Promise<usuarioArrendador> {
    try {
      const response = await axios.put<usuarioArrendador>(`${this.apiUrl}/${arrendador.id}`, arrendador);
      return response.data;
    } catch (error) {
      console.error('Error al actualizar arrendador:', error);
      throw error;
    }
  }

  async borrarArrendador(id: number): Promise<void> {
    try {
      await axios.delete(`${this.apiUrl}/${id}`);
    } catch (error) {
      console.error('Error al borrar arrendador:', error);
      throw error;
    }
  }
}