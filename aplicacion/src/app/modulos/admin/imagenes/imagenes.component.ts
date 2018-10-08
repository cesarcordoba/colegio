import {Component, OnInit} from '@angular/core';
import {Imagen} from '../../../models/imagen.model'
import {Miembro} from '../../../models/miembro.model'
import {ImagenService} from '../../../services/imagen.service'
import {AWSService} from '../../../services/aws.service'
import {MiembrosService} from '../../../services/miembros.service'
import {NoticiasService} from '../../../services/noticias.service'
import {EventosService} from '../../../services/eventos.service'
import { Router } from '@angular/router'

@Component({
    selector: 'imagenes',
    templateUrl: './imagenes.component.pug',
    styleUrls: ['./imagenes.component.styl'],
    providers: [ImagenService, AWSService, MiembrosService, NoticiasService, EventosService]
})

export class ImagenesComponent implements OnInit {
    imagenes: Imagen[] = [];
    destinos = [];
    subdestinos = [];
    visible : boolean = false;
    destinosImagenes = [];

    constructor(private _router: Router,){
    }

    subdestino(destino){

        switch(destino){
            case "1":{
                this.visible=true;
                MiembrosService.obtener().then(response => this.subdestinos = response.data)
                break;
            }
            case "2":{
                this.visible;
                NoticiasService.obtener().then(response => this.subdestinos = response.data)
                break;
            }
            case "3":{
                this.visible;
                EventosService.obtener().then(response => this.subdestinos = response.data)
                break;
            }
        }

    }


    ngOnInit(){

        this.destinos = [{id:'1', nombre:'Miembros'},{id:'2', nombre:'Noticias'},{id:'3', nombre:'Eventos'}];
        this.destinosImagenes = [{id:'1', nombre:'Noticias'},{id:'2', nombre:'Eventos'}]



    }

}
