import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


/* Importamos los componentes que se usarán en las rutas
 */
import { AdminComponent } from './admin.component';
import { EventosComponent } from './eventos/eventos.component';
import { EventoComponent } from './eventos/evento/evento.component'
import { ImagenesComponent } from './imagenes/imagenes.component';
import { MiembrosComponent} from './miembros/miembros.component';
import { MiembroComponent } from './miembros/miembro/miembro.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiaComponent } from './noticias/noticia/noticia.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../../guards/auth.guard';
import { AuthService } from '../../services/auth.service';

const admin_routers: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeComponent
    },
    {
        path: 'noticias',
        component: NoticiasComponent
    },
    {
        path: 'noticias/:id',
        component: NoticiaComponent
    },
    {
        path: 'imagenes',
        component: ImagenesComponent
    },
    {
        path: 'miembros',
        component: MiembrosComponent
    },
    {
        path: 'miembros/:id',
        component: MiembroComponent
    },
    {
        path: 'eventos',
        component: EventosComponent
    },
    {
        path: 'eventos/:id',
        component: EventoComponent
    }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(admin_routers),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGuard, AuthService]
})
export class AdminRoutingModule { }
