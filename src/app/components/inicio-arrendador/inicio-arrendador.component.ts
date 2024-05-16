import { Component } from '@angular/core';
import { usuarioArrendador } from '../../models/usuarioArredendador';
import { usuarioArrendadorService } from '../../services/usuarioArrendador.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-inicio-arrendador',
  standalone: true,
  imports: [FormsModule ],
  templateUrl: './inicio-arrendador.component.html',
  styleUrl: './inicio-arrendador.component.css'
})
export class InicioArrendadorComponent {
  usuarioId: number | null = null;
  usuario: usuarioArrendador | null = null;

  constructor(private route: ActivatedRoute, private usuarioService: usuarioArrendadorService,private authService: AuthService, private router: Router) {}

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
