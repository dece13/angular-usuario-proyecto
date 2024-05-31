import { Routes } from '@angular/router';
import { UsuarioArrendadorComponent } from './components/usuario-arrendador/usuario-arrendador.component';
import { PropiedadesArrendatarioComponent } from './components/propiedades-arrendatario/propiedades-arrendatario.component';
import { UsuarioArrendatarioComponent } from './components/usuario-arrendatario/usuario-arrendatario.component';
import { SingUpArrendatarioComponent } from './components/sing-up-arrendatario/sing-up-arrendatario.component';
import { SingUpArrendadorComponent } from './components/sing-up-arrendador/sing-up-arrendador.component';
import { SingInArrendatarioComponent } from './components/sing-in-arrendatario/sing-in-arrendatario.component';
import { InicioArrendatarioComponent } from './components/inicio-arrendatario/inicio-arrendatario.component';
import { SinginArrendadorComponent } from './components/singin-arrendador/singin-arrendador.component';
import { InicioArrendadorComponent } from './components/inicio-arrendador/inicio-arrendador.component';
import { ReservarComponent } from './components/reservar/reservar.component';

export const routes: Routes = [
    {path:'arrendadorUsuario/data',component: UsuarioArrendadorComponent},
    {path: 'propiedades-arrendatario', component: PropiedadesArrendatarioComponent},
    {path: 'arrendatarioUsuario/data', component: UsuarioArrendatarioComponent},
    {path: 'UsuarioArrendatario/singUp', component: SingUpArrendatarioComponent},
    {path: 'UsuarioArrendador/singUp', component: SingUpArrendadorComponent},
    {path: 'UsuarioArrendatario/singIn', component: SingInArrendatarioComponent},
    {path: 'UsuarioArrendador/singIn', component: SinginArrendadorComponent},
    {path: 'UsuarioArrendatario/Inicio/:id' , component: InicioArrendatarioComponent},
    {path: 'UsuarioArrendador/Inicio/:id' , component: InicioArrendadorComponent},
    {path: 'propiedades/seleccion' , component: ReservarComponent}

];
