import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Noticia} from '../../../../models/noticia.model';
import {Categoria} from '../../../../models/categoria.model';
import {NoticiasService} from '../../../../services/noticias.service';
import {CategoriasService} from '../../../../services/categorias.service';
import {Router, ActivatedRoute} from '@angular/router';
import { MatDialog } from '@angular/material'
import { ConfirmDelDialogComponent } from '../../fragments/confirm-del-dialog/confirm-del-dialog.component'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import { NoticiasComponent } from '../noticias.component';
import { ImagenService } from '../../../../services/imagen.service';

@Component({
    selector: 'noticia',
    templateUrl: './noticia.component.pug',
    styleUrls: ['./noticia.component.styl'],
    providers: [NoticiasService, CategoriasService, ImagenService],
    encapsulation: ViewEncapsulation.None
})


export class NoticiaComponent implements OnInit{
    variable: any;
    form : FormGroup;
    noticia : Noticia;
    visible : boolean;
    idNoticia : number;
    tipos = [];
    options : {};
    constructor(private _router: Router,
        private _route: ActivatedRoute,
        private formBuilder: FormBuilder,
        public snackBar: MatSnackBar,
        private dialog: MatDialog){

        this.noticia = new Noticia({})

    }


    mandarAEdicion(){
        this.visible = !this.visible;
    }

    submit(noticia){
        console.log(noticia);
        NoticiasService.editar(noticia)
        .then(response => console.log(response.data))
        .then(response => !this.visible)
        this.snackBar.open("Guardado Correctamente", "cerrar", {duration: 1000});

    }
    cargarTipos(){
        this.tipos = [{id: "1", nombre:"Institución"},{id: "2", nombre:"Actualidad"},{id: "3", nombre:"Prensa"}];
    }

    ngOnInit(){
        ImagenService.froala().then(response => {
            this.variable = response.data
            this.options = {
                placeholderText: 'Escribe aqui',
                charCounterCount: false,
                imageUploadURL: false,
                theme: 'dark',
                imageUploadToS3: this.variable
                }
        })
        !this.visible
        this._route.params.subscribe(params => {
            this.idNoticia = +params['id'];
            NoticiasService.one(+params['id'])
            .then(response => this.noticia = new Noticia(response.data))
            .then(response => console.log(this.noticia))
            //.then(response => this.categoriasNoticias(this.noticia.IdCategoria))
        })
        this.cargarTipos();

        this.form = this.formBuilder.group({
            nombre:[this.noticia.nombre, Validators.required],
            introduccion:[this.noticia.introduccion, Validators.required],
            tipo:[this.noticia.tipo, Validators.required],
            descripcion:[this.noticia.descripcion, Validators.required]
        })

        //this.obtenerCategorias();

    }

}
