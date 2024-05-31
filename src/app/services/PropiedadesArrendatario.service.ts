import { Injectable } from '@angular/core';
import {PropiedadesArrendatario} from '../models/PropiedadesArrendatario';

import { Observable, of } from 'rxjs';

import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PropiedadesArrendatarioService {

  private apiUrl = 'http://localhost:8080/grupo13/logingFormularioPropiedades'; // URL del backend

  constructor() { }

  // Método para enviar los datos del arrendador al backend
  async agregarPropiedad(propiedad: PropiedadesArrendatario): Promise<PropiedadesArrendatario> {
    try {
      const response = await axios.post<PropiedadesArrendatario>('http://localhost:8080/grupo13/logingFormularioPropiedades', propiedad);
      return response.data;
    } catch (error) {
      console.error('Error al agregar propiedad:', error);
      throw error;
    }
  }

  getPropiedadExterno(): Promise<PropiedadesArrendatario[]> {
    
    const iduser = localStorage.getItem('userId');
    if (!iduser) {
        throw new Error('ID de usuario no encontrado en localStorage');
    }
    
    const url = `http://localhost:8080/grupo13/logingFormularioPropiedades/arrendador/${iduser}`;
    
    return axios.get<PropiedadesArrendatario[]>(url)
        .then(response => response.data);
}

getPropiedadExternoArrendador(): Promise<PropiedadesArrendatario[]> {
    
  const iduser = localStorage.getItem('userId');
  if (!iduser) {
      throw new Error('ID de usuario no encontrado en localStorage');
  }
  
  const url = `http://localhost:8080/grupo13/logingFormularioPropiedades`;
  
  return axios.get<PropiedadesArrendatario[]>(url)
      .then(response => response.data);
}

  async actualizarPropiedad(propiedad: PropiedadesArrendatario): Promise<PropiedadesArrendatario> {
    try {
      const response = await axios.put<PropiedadesArrendatario>(`${this.apiUrl}/${propiedad.id}`, propiedad);
      return response.data;
    } catch (error) {
      console.error('Error al actualizar propiedad:', error);
      throw error;
    }
  }

  async borrarPropiedad(id: number): Promise<void> {
    try {
      await axios.delete(`${this.apiUrl}/${id}`);
    } catch (error) {
      console.error('Error al borrar propiedad:', error);
      throw error;
    }
  }
}

export { PropiedadesArrendatario };