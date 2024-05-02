import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UsuarioArrendatario } from '../../models/UsuarioArrendatario';
import { UsuarioArrendatarioService } from '../../services/UsuarioArrendatario.service';

@Component({
  selector: 'app-sing-up-arrendatario',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './sing-up-arrendatario.component.html',
  styleUrl: './sing-up-arrendatario.component.css'
})
export class SingUpArrendatarioComponent {

  nuevoArrendatario: UsuarioArrendatario = new UsuarioArrendatario(0, '', '', 0, '', 0, 0); // Nuevo arrendador a agregar
  datosModelosService: UsuarioArrendatario[] = [];

  constructor(private usuarioArrendatarioService: UsuarioArrendatarioService) {}
  // Método para agregar un nuevo arrendador
  agregarArrendatario(): void {
    this.usuarioArrendatarioService.agregarArrendatario(this.nuevoArrendatario)
      .then(nuevoArrendatario => {
        console.log('Arrendador agregado:', nuevoArrendatario);
        // Aquí puedes realizar cualquier lógica adicional después de agregar el arrendador, como limpiar el formulario
        this.nuevoArrendatario = new UsuarioArrendatario(0, '', '', 0, '', 0, 1);
        this.cargarUsuarioArrendatario();
      })
      .catch(error => {
        console.error('Error al agregar arrendador:', error);
        // Maneja el error según sea necesario
      });
  }

  cargarUsuarioArrendatario(): void {
    this.usuarioArrendatarioService.getArrendatarioExterno().then((arrendatario) => {
      this.datosModelosService = arrendatario;
    }).catch((error) => {
      console.error(error);
    });
  }
}
