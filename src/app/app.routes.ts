import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { PublicacionesComponent } from './paginas/publicaciones/publicaciones.component';
import { ContactenosComponent } from './paginas/contactenos/contactenos.component';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';

export const routes: Routes = [
    {path: "inicio", component: InicioComponent},
    {path: "nosotros", component: NosotrosComponent},
    {path: "contactenos", component: ContactenosComponent},
    {path: "publicaciones", component: PublicacionesComponent},
    { path: '',   redirectTo: '/inicio', pathMatch: 'prefix' } // redirect to `first-component`
];
