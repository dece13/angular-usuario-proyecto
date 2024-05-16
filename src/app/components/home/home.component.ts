import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private authService: AuthService, private router: Router) { } // Inject Router here

  // Función para cerrar sesión
  logout(): void {
    this.authService.logout();
    console.log(localStorage.getItem('loggedIn'))
  }

  irInicio(){
    var userId=localStorage.getItem('userId')
    this.router.navigate(['UsuarioArrendatario/Inicio', userId]);
  }

  // Función para verificar si el usuario está autenticado
  isLoggedIn(): boolean {
    console.log(localStorage.getItem('loggedIn'))
    return this.authService.isLoggedIn();
  }
}
