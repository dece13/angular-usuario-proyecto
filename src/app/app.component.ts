import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';

import { PropiedadesArrendatarioComponent } from "./components/propiedades-arrendatario/propiedades-arrendatario.component";
import { routes } from './app.routes';
import { HomeComponent } from "./components/home/home.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, FormsModule, PropiedadesArrendatarioComponent, RouterModule, HomeComponent]
})
export class AppComponent {
  title = 'MEJORES WEB MUNDIAL';

  constructor(private router: Router) {}
  
  isHome(): boolean {
    return this.router.url === '/';
  }
}