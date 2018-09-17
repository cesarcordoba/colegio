import {Component, OnInit} from '@angular/core';
import {Imagen} from '../../../models/imagen.model'
import {ImagenService} from '../../../services/imagen.service'
import { Router } from '@angular/router'

@Component({
    selector: 'imagenes',
    templateUrl: './imagenes.component.pug',
    styleUrls: ['./imagenes.component.styl'],
    providers: [ImagenService]
})

export class ImagenesComponent implements OnInit {
    imagenes: Imagen[] = []

    constructor(private _router: Router){
    }

    ngOnInit(){

    }

}
