import { Routes } from '@angular/router';
import { UsuarioArrendadorComponent } from './components/usuario-arrendador/usuario-arrendador.component';
import { PropiedadesArrendatarioComponent } from './components/propiedades-arrendatario/propiedades-arrendatario.component';
import { UsuarioArrendatarioComponent } from './components/usuario-arrendatario/usuario-arrendatario.component';
import { SingUpArrendatarioComponent } from './components/sing-up-arrendatario/sing-up-arrendatario.component';
import { SingUpArrendadorComponent } from './components/sing-up-arrendador/sing-up-arrendador.component';

export const routes: Routes = [
    {path:'arrendadorUsuario/data',component: UsuarioArrendadorComponent},
    {path: 'propiedades-arrendatario', component: PropiedadesArrendatarioComponent},
    {path: 'arrendatarioUsuario/data', component: UsuarioArrendatarioComponent},
    {path: 'UsuarioArrendatario/singUp', component: SingUpArrendatarioComponent},
    {path: 'UsuarioArrendador/singUp', component: SingUpArrendadorComponent}
];
