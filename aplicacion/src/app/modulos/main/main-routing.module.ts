import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

/* Importamos los componentes que se usarán en las rutas
 */
import {MainComponent} from './main.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../../guards/auth.guard';
import { AuthService } from '../../services/auth.service';
import { UsuarioComponent } from './usuario/usuario.component';

import { NoticiasComponent } from './noticias/noticias.component';
import { MiembrosComponent } from './miembros/miembros.component';
import { EventosComponent } from './eventos/eventos.component';

import { NoticiaComponent } from './noticias/noticia/noticia.component';
import { MiembroComponent } from './miembros/miembro/miembro.component';
import { EventoComponent } from './eventos/evento/evento.component';
import { InstitucionComponent } from './institucion/institucion.component';

const main_routers: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'user',
        component: UsuarioComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'user/:token',
        component: LoginComponent
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
        path: 'eventos',
        component: EventosComponent
      },
      {
        path: 'eventos/:id',
        component: EventoComponent
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
        path: 'institucion',
        component: InstitucionComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(main_routers),
    CommonModule,
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGuard, AuthService]
})
export class MainRoutingModule { }
