import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { QuillEditorModule } from 'ngx-quill-editor';
import { AdminRoutingModule } from './admin-routing.module';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { EventosComponent } from './eventos/eventos.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { MiembrosComponent} from './miembros/miembros.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiaComponent } from './noticias/noticia/noticia.component';
import { NuevaNoticiaComponent } from './noticias/nueva-noticia/nueva-noticia.component';
import { TagsComponent} from './tags/tags.component';
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
    NuevaNoticiaComponent
  ],
  declarations: [
    AdminComponent,
    HomeComponent,
    ConfirmDelDialogComponent,
    AnadirProyectoDialog,
    NoticiasComponent,
    NoticiaComponent,
    NuevaNoticiaComponent,
    CategoriasComponent,
    EventosComponent,
    ImagenesComponent,
    MiembrosComponent,
    TagsComponent
  ]

})
export class AdminModule { }
