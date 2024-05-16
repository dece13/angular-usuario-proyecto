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
    
    if (email === 'daniel' && password === 'castellanos') {
      // Autenticación exitosa, redirigir al usuario a la página deseada
      // Después de autenticar al usuario y obtener su ID
      const userId = 1; // ID del usuario autenticado   
      
      // Guardar información de autenticación en localStorage
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('userId', userId.toString());
      
      
      this.router.navigate(['UsuarioArrendatario/Inicio', userId]); 
      return true;
    } 
    else {
      if (email==='soyel'&&password==='mejor'){
        const userId = 2; // ID del usuario autenticado 
      
      // Guardar información de autenticación en localStorage
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('userId', userId.toString());
      
      
      this.router.navigate(['UsuarioArrendador/Inicio', userId]); // Cambia '/dashboard' por la ruta a la que quieres redirigir al usuario
      return true;
      }else{
      // Autenticación fallida
      return false;
    }
    }
  }

  logout(): void {
    // Limpiar la información de autenticación en localStorage
    localStorage.setItem('loggedIn','false');
    localStorage.removeItem('userId');
    
    // Redirigir al usuario a la página de inicio de sesión
    this.router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    // Verificar si el usuario está autenticado consultando localStorage
    return localStorage.getItem('loggedIn') === 'true';
  }

}
