import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { QuillEditorModule } from 'ngx-quill-editor';
import { AdminRoutingModule } from './admin-routing.module';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
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
  ],
  declarations: [
    AdminComponent,
    HomeComponent,
    ConfirmDelDialogComponent,
    AnadirProyectoDialog,
  ]
  
})
export class AdminModule { }