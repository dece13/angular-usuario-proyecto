import { Component } from '@angular/core';
import { UsuarioArrendatario } from '../../models/UsuarioArrendatario';
import { UsuarioArrendatarioService } from '../../services/UsuarioArrendatario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-inicio-arrendatario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inicio-arrendatario.component.html',
  styleUrl: './inicio-arrendatario.component.css'
})
export class InicioArrendatarioComponent {
  usuarioId: number | null = null;
  usuario: UsuarioArrendatario | null = null;

  constructor(private route: ActivatedRoute, private usuarioService: UsuarioArrendatarioService,private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.usuarioId = +params['id']; // Obtener el ID del usuario de la URL
      this.cargarUsuario();
    });
  }

  cargarUsuario(): void {
    if (this.usuarioId) {
      this.usuarioService.obtenerUsuarioPorId(this.usuarioId)
        .then(usuario => {
          this.usuario = usuario;
        })
        .catch(error => {
          console.error('Error al cargar información del usuario:', error);
        });
    }
    
  }

  logout(): void {
    this.authService.logout();
    console.log(localStorage.getItem('loggedIn'))
  }
}
