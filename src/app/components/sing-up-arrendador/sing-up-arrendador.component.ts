import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { usuarioArrendador } from '../../models/usuarioArredendador';
import { usuarioArrendadorService } from '../../services/usuarioArrendador.service';
@Component({
  selector: 'app-sing-up-arrendador',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule,RouterModule],
  templateUrl: './sing-up-arrendador.component.html',
  styleUrl: './sing-up-arrendador.component.css'
})
export class SingUpArrendadorComponent {

  nuevoArrendador: usuarioArrendador = new usuarioArrendador(0, '', '', 0, '', 0, 0); // Nuevo arrendador a agregar
  datosModelosService: usuarioArrendador[] = [];

  constructor(private usuarioArrendadorService: usuarioArrendadorService) {}

  cargarUsuarioArrendador(): void {
    this.usuarioArrendadorService.getArrendadorExterno().then((arrendadores) => {
      this.datosModelosService = arrendadores;
    }).catch((error) => {
      console.error(error);
    });
  }

  // Método para agregar un nuevo arrendador
  agregarArrendador(): void {
    this.usuarioArrendadorService.agregarArrendador(this.nuevoArrendador)
      .then(nuevoArrendador => {
        console.log('Arrendador agregado:', nuevoArrendador);
        // Aquí puedes realizar cualquier lógica adicional después de agregar el arrendador, como limpiar el formulario
        this.nuevoArrendador = new usuarioArrendador(0, '', '', 0, '', 0, 1);
        this.cargarUsuarioArrendador();
      })
      .catch(error => {
        console.error('Error al agregar arrendador:', error);
        // Maneja el error según sea necesario
      });
  }



}
