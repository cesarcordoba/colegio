import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


/* Importamos los componentes que se usarán en las rutas
 */
import { AdminComponent } from './admin.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { EventosComponent } from './eventos/eventos.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { MiembrosComponent} from './miembros/miembros.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiaComponent } from './noticias/noticia/noticia.component';
import { TagsComponent} from './tags/tags.component';
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
      path: 'eventos',
      component: EventosComponent
    },
    {
      path: 'categorias',
      component: CategoriasComponent
    },
    {
      path: 'tags',
      component: TagsComponent
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
