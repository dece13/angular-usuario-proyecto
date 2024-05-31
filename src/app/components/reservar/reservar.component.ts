import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PropiedadesArrendatario } from '../../models/PropiedadesArrendatario';
import { PropiedadesArrendatarioService } from '../../services/PropiedadesArrendatario.service'

@Component({
  selector: 'app-reservar',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, RouterModule],
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css']
})
export class ReservarComponent {
  title = 'Propiedades Arrendatario';

  nuevaPropiedad: PropiedadesArrendatario = new PropiedadesArrendatario(0, 0, '', '', 0, '', false, ''); // Nuevo arrendador a agregar
  datosModelosService: PropiedadesArrendatario[] = [];
  propiedadSeleccionada: PropiedadesArrendatario | null = null;

  constructor(private propiedadesArrendatarioService: PropiedadesArrendatarioService) { }

  ngOnInit(): void {
    this.cargarPropiedadesArrendador();
  }

  cargarPropiedadesArrendador(): void {
    this.propiedadesArrendatarioService.getPropiedadExternoArrendador().then((propiedades) => {
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

  

  actualizarPropiedad(): void {
    if (this.propiedadSeleccionada) {
      if (this.propiedadSeleccionada.reservada) {
        alert('La propiedad ya está reservada y no se puede modificar.');
        return;
      }

      // Cambiar reservada a true y reservadaPor a 1
      this.propiedadSeleccionada.reservada = true;
      this.propiedadSeleccionada.reservadaPor = '1' ;

      this.propiedadesArrendatarioService.actualizarPropiedad(this.propiedadSeleccionada)
        .then(PropiedadActualizada => {
          console.log('Propiedad actualizada:', PropiedadActualizada);
          this.cargarPropiedadesArrendador();
        })
        .catch(error => {
          console.error('Error al actualizar la propiedad:', error);
        });
    }
  }

}
