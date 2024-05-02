import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UsuarioArrendatario } from '../../models/UsuarioArrendatario';
import { UsuarioArrendatarioService } from '../../services/UsuarioArrendatario.service';
@Component({
  selector: 'app-usuario-arrendatario',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule,RouterModule],
  templateUrl: './usuario-arrendatario.component.html',
  styleUrl: './usuario-arrendatario.component.css'
})
export class UsuarioArrendatarioComponent {

  nuevoArrendatario: UsuarioArrendatario = new UsuarioArrendatario(0, '', '', 0, '', 0, 0); // Nuevo arrendador a agregar
  datosModelosService: UsuarioArrendatario[] = [];
  arrendatarioSeleccionado: UsuarioArrendatario | null = null;

  constructor(private usuarioArrendatarioService: UsuarioArrendatarioService) {}

  ngOnInit(): void {
    this.cargarUsuarioArrendatario();
  }

  cargarUsuarioArrendatario(): void {
    this.usuarioArrendatarioService.getArrendatarioExterno().then((arrendatario) => {
      this.datosModelosService = arrendatario;
    }).catch((error) => {
      console.error(error);
    });
  }

  seleccionarArrendador(arrendatario: UsuarioArrendatario): void {
    this.arrendatarioSeleccionado = arrendatario;
  }

  reiniciarSeleccion(): void {
    this.arrendatarioSeleccionado = null;
  }

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

  actualizarArrendador(): void {
    if (this.arrendatarioSeleccionado) {
      this.usuarioArrendatarioService.actualizarArrendatario(this.arrendatarioSeleccionado)
        .then(arrendatarioActualizado => {
          console.log('Arrendador actualizado:', arrendatarioActualizado);
          this.cargarUsuarioArrendatario();
        })
        .catch(error => {
          console.error('Error al actualizar arrendador:', error);
        });
    }
  }

  borrarArrendatario(id: number): void {
    this.usuarioArrendatarioService.borrarArrendatario(id)
      .then(() => {
        console.log('Arrendador borrado con éxito');
        this.cargarUsuarioArrendatario();
        this.arrendatarioSeleccionado = null;
      })
      .catch(error => {
        console.error('Error al borrar arrendador:', error);
      });
  }
}

