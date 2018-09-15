import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


/* Importamos los componentes que se usarán en las rutas
 */
import { AdminComponent } from './admin.component';
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
      component: HomeComponent
    },
    {
      path: 'miembros',
      component: HomeComponent
    },
    {
      path: 'eventos',
      component: HomeComponent
    },
    {
      path: 'categorias',
      component: HomeComponent
    },
    {
      path: 'tags',
      component: HomeComponent
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
