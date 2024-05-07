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
  agregarArrendador(arrendador: usuarioArrendador): Promise<usuarioArrendador> {
    // Obtener el token CSRF del almacenamiento local o de otra fuente
    const csrfToken = localStorage.getItem('XSRF-TOKEN');
  
    // Devolver una nueva promesa
    return new Promise((resolve, reject) => {
      // Incluir el token CSRF en la solicitud
      axios.post<usuarioArrendador>(
        this.apiUrl,
        arrendador,
        { headers: { 'X-XSRF-TOKEN': csrfToken } }
      )
      .then(response => {
        // Si la solicitud se completó correctamente, resolver la promesa con los datos de respuesta
        resolve(response.data);
      })
      .catch(error => {
        // Si se produce un error, rechazar la promesa y pasar el error al manejador de errores
        console.error('Error al agregar arrendador:', error);
        reject(error);
      });
    });
  }
  

  // Método para obtener el token CSRF de la cookie
  private getCSRFTokenFromCookie(): string {
    const cookieValue = document.cookie
      .split('; ')
      .find(row => row.startsWith('XSRF-TOKEN'))
      ?.split('=')[1];
    return cookieValue ? cookieValue : '';
  } 
  /*
  getArrendadorInterno(): Observable< usuarioArrendador[] > {
    return of([
      new usuarioArrendador(1, "Palblo", "Márquez",20, "palomar@gmail.com",3123123,0),
      new usuarioArrendador(2, "Malría", "Pacheco",20, "marrpache@gmail.com",3424242,0),
      new usuarioArrendador(3, "Frañncisco", "Márquez",20, "franmark@gmail.com",434244,0),
      new usuarioArrendador(4, "Milguel", "Márquez",20, "miguer@gmail.com",31241241,0),
    ]);
  }*/

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