import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { usuarioArrendador } from './models/usuarioArredendador';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
import { CommonModule } from '@angular/common';
import { usuarioArrendadorService } from './services/usuarioArrendador.service';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet,CommonModule,FormsModule],
  
})
export class AppComponent {
  title = 'angular-usuario-proyecto';
  nuevoArrendador: usuarioArrendador = new usuarioArrendador(0, '', '', 0, '', 0, 0); // Nuevo arrendador a agregar
  datosModelosService: usuarioArrendador[] = [];
  arrendadorSeleccionado: usuarioArrendador | null = null;

  constructor(private usuarioArrendadorService: usuarioArrendadorService) {}

  ngOnInit(): void {
    this.cargarUsuarioArrendador();
  }

  cargarUsuarioArrendador(): void {
    this.usuarioArrendadorService.getArrendadorExterno().then((arrendadores) => {
      this.datosModelosService = arrendadores;
    }).catch((error) => {
      console.error(error);
    });
  }

  seleccionarArrendador(arrendador: usuarioArrendador): void {
    this.arrendadorSeleccionado = arrendador;
  }

  reiniciarSeleccion(): void {
    this.arrendadorSeleccionado = null;
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

  actualizarArrendador(): void {
    if (this.arrendadorSeleccionado) {
      this.usuarioArrendadorService.actualizarArrendador(this.arrendadorSeleccionado)
        .then(arrendadorActualizado => {
          console.log('Arrendador actualizado:', arrendadorActualizado);
          this.cargarUsuarioArrendador();
        })
        .catch(error => {
          console.error('Error al actualizar arrendador:', error);
        });
    }
  }

  borrarArrendador(id: number): void {
    this.usuarioArrendadorService.borrarArrendador(id)
      .then(() => {
        console.log('Arrendador borrado con éxito');
        this.cargarUsuarioArrendador();
        this.arrendadorSeleccionado = null;
      })
      .catch(error => {
        console.error('Error al borrar arrendador:', error);
      });
  }

  
}