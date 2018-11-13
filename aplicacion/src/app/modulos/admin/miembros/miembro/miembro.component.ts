import {Component, OnInit} from '@angular/core';
import {Miembro} from '../../../../models/miembro.model';
import {Categoria} from '../../../../models/categoria.model';
import {MiembrosService} from '../../../../services/miembros.service';
import {CategoriasService} from '../../../../services/categorias.service';
import {Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import { MatDialog } from '@angular/material'
import { ConfirmDelDialogComponent } from '../../fragments/confirm-del-dialog/confirm-del-dialog.component'
import { PortadaService } from '../../../../services/portada.service';

@Component({
    selector: 'miembro',
    templateUrl: './miembro.component.pug',
    styleUrls: ['./miembro.component.styl'],
    providers: [MiembrosService, CategoriasService, PortadaService]
})

export class MiembroComponent implements OnInit{
    form : FormGroup;
    miembro : Miembro;
    idMiembro: number;
    mostrarSubcategorias: boolean;
    visible : boolean;
    categorias: Categoria[] = [];
    subcategorias: Categoria[] = [];
    agregar_categoria: Categoria;
    agregar = {Categoria:{nombre: null}, nombre: null};
    categoriasAgregadas : Categoria[] = [];
    options : {}
    variable: any;
    checked: boolean = false;
    color :string = 'warn'
    constructor(private _router: Router, private _route: ActivatedRoute, private formBuilder: FormBuilder, public snackBar: MatSnackBar, private dialog: MatDialog){
            this.miembro = new Miembro({})

    }
    mandarAEdicion(){
        this.visible = !this.visible;
        this.miembro.activo === "activo" ? this.checked = true : this.checked = false;
    }

    submit(miembro){
        console.log(miembro);
        MiembrosService.editar(miembro)
        .then(response => console.log(response.data))
        .then(response => !this.visible)
        this.snackBar.open("Guardado Correctamente", "cerrar", {duration: 1000});

    }

    activar(activado){
        activado === true ? this.miembro.activo = "activo" : this.miembro.activo = "inactivo"
        console.log(activado)

    }

    //-CODIGO DE CATEGORIAS

    obtenerTodasCategorias(){
        CategoriasService.obtenerCategorias()
        .then(response => this.categorias = response.data.map(n => new Categoria(n)))
    }

    miembrosxCategoria(){
        MiembrosService.obtenercategorias(this.idMiembro)
        .then(response => this.categoriasAgregadas = response.data)
        .then(result => {console.log(this.categoriasAgregadas)})

    }


    obtenerSubcategorias(categoria){
        this.agregar.Categoria.nombre = categoria._nombre;
        CategoriasService.obtenerSubCategorias(categoria.id)
        .then(response => this.subcategorias = response.data.map(n => new Categoria(n)))
        .then(response => this.mostrarSubcategorias = this.subcategorias.length > 0 ? true : false)
    }

    agregarSubcategoria(subcategoria){
        this.agregar_categoria = subcategoria;
        this.agregar.nombre = subcategoria._nombre;
    }

    guardarCategoria(){
        //this.categoriasAgregadas.push(this.agregar)
        if(this.agregar != null){
            MiembrosService.unirACategoria(this.idMiembro, this.agregar_categoria.id_Categoria)
            .then(response => console.log(response.data))
        }
    }

    eliminarCategoria(categoria){
        this.dialog.open(ConfirmDelDialogComponent,{
            width: '290px',
            height: '200px'
        }).afterClosed().subscribe(result => {
            result ?
                MiembrosService.borrarUnionACategoria(this.idMiembro, categoria.id)
                .then(response =>  this.categoriasAgregadas.splice(this.categoriasAgregadas.indexOf(categoria),1))
                : null;

        });
    }



    ngOnInit(){
        PortadaService.froala().then(response => {
            this.variable = response.data
            this.options = {
                placeholderText: 'Escribe aqui',
                charCounterCount: false,
                imageUploadURL: false,
                theme: 'dark',
                imageUploadToS3: this.variable
                }
        })
        this._route.params.subscribe(params => {
            this.idMiembro = +params['id'];
            MiembrosService.one(+params['id'])
            .then(response => {
                this.miembro = new Miembro(response.data)
                this.miembro.activo === "activo" ? this.checked = true : this.checked = false;
            })
            
        })

        this.obtenerTodasCategorias();
        this.miembrosxCategoria();

        this.form = this.formBuilder.group({
            nombre:[this.miembro.nombre, Validators.required],
            fecha:[this.miembro.fecha, Validators.required],
            descripcion:[this.miembro.descripcion, Validators.required]
        })
    }

}
