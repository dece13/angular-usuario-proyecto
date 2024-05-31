import { Component } from '@angular/core';
import { AuthArrendadorService } from '../../services/authArrendador.service';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí

@Component({
  selector: 'app-singin-arrendador',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './singin-arrendador.component.html',
  styleUrl: './singin-arrendador.component.css'
})
export class SinginArrendadorComponent {
  email: string = '';
  password: string = '';

  constructor(private authArrendadorService: AuthArrendadorService) { }

  signin() {
    if (this.authArrendadorService.login(this.email, this.password)) {
      // Si el inicio de sesión es exitoso, el AuthService redireccionará al usuario automáticamente
    } else {
      // Si el inicio de sesión falla, puedes manejarlo aquí (por ejemplo, mostrar un mensaje de error)
      console.log('Inicio de sesión fallido. Verifica tus credenciales.');
    }
  }
}
