import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
@Component({
  selector: 'app-sing-in-arrendatario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sing-in-arrendatario.component.html',
  styleUrl: './sing-in-arrendatario.component.css'
})
export class SingInArrendatarioComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  signin() {
    if (this.authService.login(this.email, this.password)) {
      // Si el inicio de sesión es exitoso, el AuthService redireccionará al usuario automáticamente
    } else {
      // Si el inicio de sesión falla, puedes manejarlo aquí (por ejemplo, mostrar un mensaje de error)
      console.log('Inicio de sesión fallido. Verifica tus credenciales.');
    }
  }
}
