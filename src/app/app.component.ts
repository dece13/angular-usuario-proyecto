import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { usuarioArrendador } from './models/usuarioArredendador';
import { CommonModule } from '@angular/common';
import { usuarioArrendadorService } from './services/usuarioArrendador.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet,CommonModule]
})
export class AppComponent {
  title = 'angular-usuario-proyecto';
  
  datosModelosService: usuarioArrendador[] = [];
  datosModelosServiceExterno: usuarioArrendador[] = [];
  datos = [
    {nombre: "Pablo", apellido:"Márquez", edad:20,correo:"palo@gmail.com",numero:123123,tipoCuenta:0},
    {nombre: "María", apellido:"Pacheco", edad:20,correo:"palo@gmail.com",numero:123123,tipoCuenta:0},
    {nombre: "Francisco", apellido:"Márquez", edad:20,correo:"palo@gmail.com",numero:123123,tipoCuenta:0},
    {nombre: "Miguel", apellido:"Márquez", edad:20,correo:"palo@gmail.com",numero:123123,tipoCuenta:0},

  ];
  datosModelos = [
    new usuarioArrendador(1, "Pablo", "Márquez",20, "palomar@gmail.com",3123123,0),
    new usuarioArrendador(2, "María", "Pacheco",20, "marrpache@gmail.com",3424242,0),
    new usuarioArrendador(3, "Francisco", "Márquez",20, "franmark@gmail.com",434244,0),
    new usuarioArrendador(4, "Miguel", "Márquez",20, "miguer@gmail.com",31241241,0),
  ]

  constructor(
    private usuarioArrendadorService: usuarioArrendadorService,
    
  ){
  }
  ngOnInit(): void {
    this.cargarUsuarioArrendador();
  }
  cargarUsuarioArrendador(){
    // Externo
    this.usuarioArrendadorService.getArrendadorExterno().then((post) => {
      this.datosModelosServiceExterno = post;
    }).catch((error) => {
      console.error(error);
    });

    // Interno
    this.usuarioArrendadorService.getArrendadorInterno().subscribe( response =>{
      this.datosModelosService  = response;
    } );
  }
}
