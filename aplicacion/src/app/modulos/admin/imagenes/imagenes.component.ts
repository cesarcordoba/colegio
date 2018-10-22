import {Component, OnInit} from '@angular/core';
import {Imagen} from '../../../models/imagen.model'
import {Miembro} from '../../../models/miembro.model'
import {ImagenService} from '../../../services/imagen.service'
import {AWSService} from '../../../services/aws.service'
import {MiembrosService} from '../../../services/miembros.service'
import {NoticiasService} from '../../../services/noticias.service'
import {EventosService} from '../../../services/eventos.service'
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router'
import { PortadaService } from '../../../services/portada.service';

@Component({
    selector: 'imagenes',
    templateUrl: './imagenes.component.pug',
    styleUrls: ['./imagenes.component.styl'],
    providers: [ImagenService, AWSService, MiembrosService, NoticiasService, EventosService]
})

export class ImagenesComponent implements OnInit {
    tipo: any;
    idTipo: any;
    imagenes: Imagen[] = [];
    destinos = [];
    subdestinos = [];
    visible : boolean = false;
    destinosImagenes = [];
    file: any;
    loader: boolean = false;
    verDropify: boolean = false
	imagenesAll: any;
    constructor(private _router: Router, private _awsSer: AWSService, public snackBar: MatSnackBar){
    }

    subirArchivoPortadas(){
        console.log(this.file)
        if(this.file == undefined){
            this.snackBar.open("No hay una imagen seleccionada", "cerrar", {duration: 1000});
        }else {
            this._awsSer.subirArchivo(this.file,"colnal-imagenes", "portadas/").subscribe(link => {
                if(link==true){
                    console.log("true")
                }else if(link==false){
                    console.log("false")
                }else{
                    switch(this.tipo){
                        case "1":{
                            let obj = {key: link.key, link: link.link, IdMiembro: this.idTipo}
                            PortadaService.crear(obj).then(response => this.snackBar.open("Portada guardada correctamente", "!!!", {duration: 1000}))
                            break;
                        }
                        case "2":{
                            let obj = {key: link.key, link: link.link, IdNoticia: this.idTipo}
                            PortadaService.crear(obj).then(response => this.snackBar.open("Portada guardada correctamente", "!!!", {duration: 1000}))
                            break;
                        }
                        case "3":{
                            let obj = {key: link.key, link: link.link, IdEvento: this.idTipo}
                            PortadaService.crear(obj).then(response => this.snackBar.open("Portada guardada correctamente", "!!!", {duration: 1000}))
                            break;
                        }
                    }
                }
            })
        }

    }

    eliminarArchivo(){
        if(this.file == undefined){
            this.snackBar.open("No hay una imagen seleccionada", "cerrar", {duration: 1000});
        }else{
            this._awsSer.borrarArchivo("segueta.png","colnal-imagenes", "portadas/").subscribe(borrado => console.log(borrado))
        }
    }

    subdestinoPortadas(destino){

        switch(destino){
            case "1":{
                this.visible=true;
                this.tipo = destino;
                MiembrosService.obtener().then(response => this.subdestinos = response.data)
                break;
            }
            case "2":{
                this.visible=true;
                this.tipo = destino;
                NoticiasService.obtener().then(response => this.subdestinos = response.data)
                break;
            }
            case "3":{
                this.visible=true;
                this.tipo = destino;
                EventosService.obtener().then(response => this.subdestinos = response.data)
                break;
            }
        }

    }
    cargaPortada(id){
        this.verDropify=true;
        this.idTipo = id;
        switch(this.tipo){
            case "1":{
                PortadaService.obtenerTodasMiembros(this.idTipo).then(response => {this.imagenesAll = response.data; console.log(this.imagenesAll.link)})
                break;
            }
            case "2":{
                PortadaService.obtenerTodasNoticias(this.idTipo).then(response => this.imagenesAll = response.data)
                break;
            }
            case "3":{
                PortadaService.obtenerTodasEventos(this.idTipo).then(response => this.imagenesAll = response.data)
                break;
            }
        }

    }

    ngOnInit(){

        this.destinos = [{id:'1', nombre:'Miembros'},{id:'2', nombre:'Noticias'},{id:'3', nombre:'Eventos'}];
        this.destinosImagenes = [{id:'1', nombre:'Noticias'},{id:'2', nombre:'Eventos'}]



    }

}
