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

@Component({
    selector: 'noticia',
    templateUrl: './noticia.component.pug',
    styleUrls: ['./noticia.component.styl'],
    providers: [NoticiasService, CategoriasService],
    encapsulation: ViewEncapsulation.None
})


export class NoticiaComponent implements OnInit{
    form : FormGroup;
    noticia : Noticia;
    visible : boolean;
    idNoticia : number;
    tipos = [];
    // mostrarSubcategorias: boolean;
    // agregar: {};
    // categorias: Categoria[] = [];
    // subcategorias: Categoria[] = [];
    // agregadas: [{}];
    // noticias_categorias: any;
	// guardar = { nombre: null};
    constructor(private _router: Router, private _route: ActivatedRoute, private formBuilder: FormBuilder, public snackBar: MatSnackBar, private dialog: MatDialog){
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
    // obtenerCategorias(){
    //     CategoriasService.obtenerCategorias()
    //     .then(response => this.categorias = response.data.map(n => new Categoria(n)))
    // }
    //
    // obtenerSubcategorias(categoria){
    //     this.agregar = {IdCategoria: categoria.id};
    //     this.guardar.nombre = categoria._nombre;
    //     console.log()
    //     CategoriasService.obtenerSubCategorias(categoria.id)
    //     .then(response => this.subcategorias = response.data.map(n => new Categoria(n)))
    //     .then(response => this.mostrarSubcategorias = this.subcategorias.length > 0 ? true : false)
    //
    // }
    //
    // agregarSubcategoria(subcategoria){
    //     this.agregar = {IdCategoria: subcategoria.id};
    // }
    //
    // agregarCategoria(){
    //     this.noticias_categorias = this.guardar;
    //     console.log(this.noticias_categorias )
    //     NoticiasService.agregarCategoria(this.idNoticia,this.agregar)
    //     .then(response => console.log(response.data))
    //     this.snackBar.open("Guardado Correctamente", "cerrar", {duration: 1000});
    //
    //
    // }
    //
    // categoriasNoticias(id){
    //     CategoriasService.categoriasdeNoticias()
    //     .then(response => this.agregadas = response.data)
    //     .then(response => this.agregadas.forEach((n: Categoria) => n.id === id ? this.noticias_categorias = n : null))
    // }
    //
    // eliminarCategoria(){
    //
    //     this.dialog.open(ConfirmDelDialogComponent,{
    //         width: '290px',
    //         height: '200px'
    //     }).afterClosed().subscribe(result => {
    //         this.agregar = {IdCategoria: null}
    //         result ?
    //             NoticiasService.eliminarCategoriaNoticia(this.idNoticia, this.agregar)
    //             .then(response => this.noticias_categorias = null)
    //             : null;
    //
    //     });
    // }

    ngOnInit(){
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
