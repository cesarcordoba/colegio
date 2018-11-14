import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { SlickModule } from 'ngx-slick';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';

import { MaterialModule } from '../../extras/material.module';
import { ExtrasModule } from '../../extras/extras.module';


import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';

import { HomeComponent } from './home/home.component';
import { InicioSesionComponent } from './home/sesion/sesion.component';
import { BoletinComponent } from './home/boletin/boletin.component';
import { ActualidadComponent } from './home/actualidad/actualidad.component';
import { InstitucionesComponent } from './home/institucion/instituciones.component';
import { PrensaComponent } from './home/prensa/prensa.component';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario/usuario.component';

import { FullCalendarModule } from 'ng-fullcalendar';

import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiaComponent } from './noticias/noticia/noticia.component';
import { MiembrosComponent } from './miembros/miembros.component';
import { MiembroComponent } from './miembros/miembro/miembro.component';
import { EventosComponent } from './eventos/eventos.component';
import { EventoComponent } from './eventos/evento/evento.component';
import { InstitucionComponent } from './institucion/institucion.component';

@NgModule({
	imports: [
	CommonModule,
	BrowserAnimationsModule,
	MainRoutingModule,
	FormsModule,  ReactiveFormsModule,
	MaterialModule,
	FullCalendarModule,
	SlickModule.forRoot(),
	AgmCoreModule.forRoot({
		apiKey: 'AIzaSyBqCAz2oy2ZHjc9_wAXqvbfyWoM725ICNk'
	  }),
	  AgmSnazzyInfoWindowModule,
	LoadingModule,
	ExtrasModule,
	],
	declarations: [
		MainComponent,
		HomeComponent,
		ActualidadComponent,
		InstitucionesComponent,
		PrensaComponent,
		InicioSesionComponent,
		BoletinComponent,
		LoginComponent,
		UsuarioComponent,
		NoticiasComponent,
		MiembrosComponent,
		EventosComponent,
		NoticiaComponent,
		MiembroComponent,
		EventoComponent,
		InstitucionComponent
	],
	entryComponents: [
		LoginComponent,
		BoletinComponent,
		InicioSesionComponent
	]
})
export class MainModule { }
