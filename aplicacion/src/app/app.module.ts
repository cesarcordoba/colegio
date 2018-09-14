import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import {DndModule} from 'ng2-dnd';
import { AgmCoreModule } from '@agm/core';
import { MaterialModule } from './extras/material.module';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent } from './app.component';
// importando  Rutas
import {AppRoutingModule} from './app.routers';

// Importando modulos de los componentes principales

import { MainModule } from './modulos/main/main.module';
import { AdminModule } from './modulos/admin/admin.module';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import { SlickModule } from 'ngx-slick';


@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MaterialModule,
      ChartsModule,
      MainModule,
      AdminModule,
      DndModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBMemut_EJ8vHuSf5SdmZ-R4wDBrUQWy6k',
    }),
    AppRoutingModule,
    FormsModule,
    LoadingModule.forRoot({
        animationType: ANIMATION_TYPES.wanderingCubes,
        backdropBackgroundColour: 'rgba(0,0,0,1)',
        backdropBorderRadius: '4px',
        primaryColour: '#87bdd8',
        secondaryColour: '#b7d7e8',
        tertiaryColour: '#cfe0e8'
    }),
    SlickModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
