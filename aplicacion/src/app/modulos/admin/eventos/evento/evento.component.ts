import { Component, OnInit } from '@angular/core';
import { Evento } from '../../../../models/evento.model';
import { Categoria } from '../../../../models/categoria.model';
import { Miembro } from '../../../../models/miembro.model';
import { EventosService } from '../../../../services/eventos.service';
import { MiembrosService } from '../../../../services/miembros.service';
import { CategoriasService } from '../../../../services/categorias.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material'
import { ConfirmDelDialogComponent } from '../../fragments/confirm-del-dialog/confirm-del-dialog.component'
import { MatSnackBar } from '@angular/material';
import { ImagenService } from '../../../../services/imagen.service';


@Component({
    selector: 'evento',
    templateUrl: './evento.component.pug',
    styleUrls: ['./evento.component.styl'],
    providers: [EventosService, MiembrosService, CategoriasService, ImagenService]
})

export class EventoComponent implements OnInit{
    form : FormGroup;
    evento : Evento;
    idEvento : number;
    visible : boolean;
    agregar_categoria: Categoria;
    categorias: Categoria[] = [];
    categoriasAgregadas : Categoria[] = [];
    miembrosAgregados: Miembro[] = [];
    agregar_miembro: Miembro;
    miembros: Miembro[] =[];
    options : {};
    variable: any;
    constructor(private _router: Router, private _route: ActivatedRoute, private formBuilder: FormBuilder, public snackBar: MatSnackBar, private dialog: MatDialog){
        this.evento = new Evento({})
    }

    mandarAEdicion(){
        this.visible = !this.visible;
    }

    submit(evento){
        console.log(evento);
        EventosService.editar(evento)
        .then(response => console.log(response.data))
        .then(response => !this.visible)
        this.snackBar.open("Guardado Correctamente", "cerrar", {duration: 1000});

    }

//-INICIO DE CATEGORIAS

    obtenerCategorias(){
        CategoriasService.obtenerCategorias()
        .then(response => this.categorias = response.data.map(n => new Categoria(n)))
        .then(response => console.log(this.categorias))
    }

    agregarCategoria(categoria){this.agregar_categoria = categoria}

    eventosxCategoria(){
        EventosService.obtenercategorias(this.idEvento)
        .then(response => this.categoriasAgregadas = response.data)
        .then(response => console.log(this.categoriasAgregadas))
    }

    eliminarCategoria(categoria){
        this.dialog.open(ConfirmDelDialogComponent,{
            width: '290px',
            height: '200px'
        }).afterClosed().subscribe(result => {
            result ?
                EventosService.borrarUnionACategoria(this.idEvento, categoria.id)
                .then(response =>  this.categoriasAgregadas.splice(this.categoriasAgregadas.indexOf(categoria),1))
                : null;

        });

    }

    guardarCategoria(){
        if(this.agregar_categoria != null){
        this.categoriasAgregadas.push(this.agregar_categoria)
        EventosService.unirACategoria(this.idEvento, this.agregar_categoria.id_Categoria)
        .then(response => console.log(response.data))
        }
    }

//-INICIO DE MIEMBROS


    obtenerMiembros(){
        MiembrosService.obtener()
        .then(response => this.miembros = response.data.map(n => new Miembro(n)))
        .then(response => console.log(this.miembros))
    }

    eventosxMiembros(){
        EventosService.obtenermiembros(this.idEvento)
        .then(response => this.miembrosAgregados = response.data)
        .then(response => console.log(this.miembrosAgregados))
    }

    agregarMiembro(miembro){this.agregar_miembro = miembro}

    guardarMiembro(){
        if(this.agregar_miembro != null){
            this.miembrosAgregados.push(this.agregar_miembro)
            EventosService.unirAMiembro(this.idEvento, this.agregar_miembro._id)
            .then(response => console.log(response.data))
        }
    }

    eliminarMiembro(miembro){
        this.dialog.open(ConfirmDelDialogComponent,{
            width: '290px',
            height: '200px'
        }).afterClosed().subscribe(result => {
            result ?
                EventosService.borrarUnionAMiembro(this.idEvento, miembro.id)
                .then(response =>  this.miembrosAgregados.splice(this.miembrosAgregados.indexOf(miembro),1))
                : null;

        });

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
            this.idEvento = +params['id'];
            EventosService.one(+params['id'])
            .then(response => this.evento = new Evento(response.data))
            .then(response => console.log(this.evento))
        })

        this.obtenerCategorias();
        this.obtenerMiembros();
        this.eventosxCategoria();
        this.eventosxMiembros();

        this.form = this.formBuilder.group({
            nombre:[this.evento.nombre, Validators.required],
            ubicacion:[this.evento.ubicacion, Validators.required],
            hora:[this.evento.hora, Validators.required],
            fecha:[this.evento.fecha, Validators.required],
            descripcion:[this.evento.descripcion, Validators.required]
        })
    }

}
