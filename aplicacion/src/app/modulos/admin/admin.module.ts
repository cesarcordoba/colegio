import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { QuillEditorModule } from 'ngx-quill-editor';
import { AdminRoutingModule } from './admin-routing.module';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { EventosComponent } from './eventos/eventos.component';
import { EventoComponent } from './eventos/evento/evento.component'
import { ImagenesComponent } from './imagenes/imagenes.component';
import { MiembrosComponent} from './miembros/miembros.component';
import { MiembroComponent } from './miembros/miembro/miembro.component';
import { NuevoMiembroComponent } from './miembros/nuevo-miembro/nuevo-miembro.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiaComponent } from './noticias/noticia/noticia.component';
import { NuevaNoticiaComponent } from './noticias/nueva-noticia/nueva-noticia.component';
import { NuevoEventoComponent } from './eventos/nuevo-evento/nuevo-evento.component';
import { ConfirmDelDialogComponent } from './fragments/confirm-del-dialog/confirm-del-dialog.component'
import { AnadirProyectoDialog } from './fragments/anadir-proyecto-dialog/anadir-proyecto-dialog.component';

import { MaterialModule } from '../../extras/material.module';
import { ExtrasModule } from '../../extras/extras.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuillEditorModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    MaterialModule,
    AgmCoreModule,
    ExtrasModule,
    FroalaEditorModule, FroalaViewModule
  ],
  exports: [],
  entryComponents: [
    ConfirmDelDialogComponent,
    AnadirProyectoDialog,
    NuevaNoticiaComponent,
    NuevoMiembroComponent,
    NuevoEventoComponent
  ],
  declarations: [
    AdminComponent,
    HomeComponent,
    ConfirmDelDialogComponent,
    AnadirProyectoDialog,
    NoticiasComponent,
    NoticiaComponent,
    NuevaNoticiaComponent,
    EventosComponent,
    EventoComponent,
    ImagenesComponent,
    MiembrosComponent,
    MiembroComponent,
    NuevoMiembroComponent,
    NuevoEventoComponent
  ]

})
export class AdminModule { }
