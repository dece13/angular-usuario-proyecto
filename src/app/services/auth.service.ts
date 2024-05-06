import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  constructor(private router: Router) { }

  login(email: string, password: string): boolean {
    // Aquí debes implementar la lógica de autenticación, por ejemplo, verificar las credenciales en el backend
    // Devuelve true si la autenticación es exitosa, de lo contrario, devuelve false
    
    if (email === '1' && password === '1') {
      // Autenticación exitosa, redirigir al usuario a la página deseada
      // Después de autenticar al usuario y obtener su ID
      const userId = 1; // ID del usuario autenticado (por ahora quemado en el código)
      this.router.navigate(['UsuarioArrendatario/Inicio', userId]); // Cambia '/dashboard' por la ruta a la que quieres redirigir al usuario
      return true;
    } else {
      // Autenticación fallida
      return false;
    }
  }
}
