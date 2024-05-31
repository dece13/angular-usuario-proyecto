import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PropiedadesArrendatario } from '../../models/PropiedadesArrendatario';
import {PropiedadesArrendatarioService} from '../../services/PropiedadesArrendatario.service'

@Component({
  selector: 'app-propiedades-arrendatario',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule,RouterModule],
  templateUrl: './propiedades-arrendatario.component.html',
  styleUrl: './propiedades-arrendatario.component.css'
})
export class PropiedadesArrendatarioComponent {
  title = 'Propiedades Arrendatario';

  nuevaPropiedad: PropiedadesArrendatario = new PropiedadesArrendatario(0, 0,'', '', 0,'',false,''); // Nuevo arrendador a agregar
  datosModelosService: PropiedadesArrendatario[] = [];
  propiedadSeleccionada: PropiedadesArrendatario | null = null;


  constructor(private propiedadesArrendatarioService: PropiedadesArrendatarioService) {}

  ngOnInit(): void {
    this.cargarPropiedadesArrendador();
  }

  cargarPropiedadesArrendador(): void {
    this.propiedadesArrendatarioService.getPropiedadExterno().then((propiedades) => {
      this.datosModelosService = propiedades;
    }).catch((error) => {
      console.error(error);
    });
  }

  seleccionarPropiedad(propiedades: PropiedadesArrendatario): void {
    this.propiedadSeleccionada = propiedades;
  }

  reiniciarSeleccion(): void {
    this.propiedadSeleccionada = null;
  }

  // Método para agregar un nuevo arrendador
  agregarPropiedad(): void {
    // Obtener el valor del localStorage
    const idString = localStorage.getItem('userId');
    console.log(idString);

    // Verificar si el valor es null y manejarlo adecuadamente
    if (idString !== null) {
      // Convertir el valor a un entero
      const iduser = parseInt(idString, 10);
      this.nuevaPropiedad.idArrendador = iduser;
      
      this.propiedadesArrendatarioService.agregarPropiedad(this.nuevaPropiedad)
        .then(nuevaPropiedad => {
          console.log('Arrendador agregado:', nuevaPropiedad);
          // Aquí puedes realizar cualquier lógica adicional después de agregar el arrendador, como limpiar el formulario
          this.nuevaPropiedad = new PropiedadesArrendatario(0, iduser, '', '', 0, '', false, '');
          this.cargarPropiedadesArrendador();
        })
        .catch(error => {
          console.error('Error al agregar arrendador:', error);
          // Maneja el error según sea necesario
        });
    } else {
      console.error('ID de usuario no encontrado en localStorage');
    }
  }

  actualizarPropiedad(): void {
    if (this.propiedadSeleccionada) {
      this.propiedadesArrendatarioService.actualizarPropiedad(this.propiedadSeleccionada)
        .then(PropiedadActualizada => {
          console.log('Arrendador actualizado:', PropiedadActualizada);
          this.cargarPropiedadesArrendador();
        })
        .catch(error => {
          console.error('Error al actualizar arrendador:', error);
        });
    }
  }

  borrarPropiedad(id: number): void {
    this.propiedadesArrendatarioService.borrarPropiedad(id)
      .then(() => {
        console.log('Arrendador borrado con éxito');
        this.cargarPropiedadesArrendador();
        this.propiedadSeleccionada = null;
      })
      .catch(error => {
        console.error('Error al borrar arrendador:', error);
      });
  }

}
