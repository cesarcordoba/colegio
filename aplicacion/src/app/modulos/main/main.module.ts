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
import { ImagenComponent } from './partials/imagen/imagen.component';
import { ReservaComponent } from './partials/reserva/reserva.component';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario/usuario.component';


@NgModule({
	imports: [
	CommonModule,
	BrowserAnimationsModule,
	MainRoutingModule,
	FormsModule,  ReactiveFormsModule,
	MaterialModule,
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
		ImagenComponent,
		ReservaComponent,
		LoginComponent,
		UsuarioComponent
	],
	entryComponents: [
		LoginComponent
	]
})
export class MainModule { }
