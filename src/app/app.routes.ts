import { Routes } from '@angular/router';
import { UsuarioArrendadorComponent } from './components/usuario-arrendador/usuario-arrendador.component';
import { PropiedadesArrendatarioComponent } from './components/propiedades-arrendatario/propiedades-arrendatario.component';

export const routes: Routes = [
    {path:'arrendadorUsuario/data',component: UsuarioArrendadorComponent},
    { path: 'propiedades-arrendatario', component: PropiedadesArrendatarioComponent }
];
