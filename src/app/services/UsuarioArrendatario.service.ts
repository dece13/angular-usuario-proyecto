import { Injectable } from '@angular/core';
import { UsuarioArrendatario } from '../models/UsuarioArrendatario';

import { Observable, of } from 'rxjs';

import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioArrendatarioService {

  private apiUrl = 'http://localhost:8080/grupo13/logingFormularioArrendatario'; // URL del backend

  constructor() { }

  // Método para enviar los datos del arrendador al backend
  async agregarArrendatario(arrendador: UsuarioArrendatario): Promise<UsuarioArrendatario> {
    try {
      const response = await axios.post<UsuarioArrendatario>('http://localhost:8080/grupo13/logingFormularioArrendatario', arrendador);
      return response.data;
    } catch (error) {
      console.error('Error al agregar arrendatario:', error);
      throw error;
    }
  }

  getArrendatarioInterno(): Observable< UsuarioArrendatario[] > {
    return of([
      new UsuarioArrendatario(1, "Palblo", "Márquez",20, "palomar@gmail.com",3123123,0),
      new UsuarioArrendatario(2, "Malría", "Pacheco",20, "marrpache@gmail.com",3424242,0),
      new UsuarioArrendatario(3, "Frañncisco", "Márquez",20, "franmark@gmail.com",434244,0),
      new UsuarioArrendatario(4, "Milguel", "Márquez",20, "miguer@gmail.com",31241241,0),
    ]);
  }

  getArrendatarioExterno(): Promise< UsuarioArrendatario[] > {
    return axios.get< UsuarioArrendatario[] >('http://localhost:8080/grupo13/logingFormularioArrendatario').then(response => response.data);
  }

  async actualizarArrendatario(arrendatario: UsuarioArrendatario): Promise<UsuarioArrendatario> {
    try {
      const response = await axios.put<UsuarioArrendatario>(`${this.apiUrl}/${arrendatario.id}`, arrendatario);
      return response.data;
    } catch (error) {
      console.error('Error al actualizar arrendatario:', error);
      throw error;
    }
  }

  async borrarArrendatario(id: number): Promise<void> {
    try {
      await axios.delete(`${this.apiUrl}/${id}`);
    } catch (error) {
      console.error('Error al borrar arrendatario:', error);
      throw error;
    }
  }
}