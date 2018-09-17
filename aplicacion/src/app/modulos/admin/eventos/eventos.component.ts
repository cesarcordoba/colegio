import {Component, OnInit} from '@angular/core';
import {Evento} from '../../../models/evento.model'
import {EventosService} from '../../../services/eventos.service'
import { Router } from '@angular/router'

@Component({
    selector: 'eventos',
    templateUrl: './eventos.component.pug',
    styleUrls: ['./eventos.component.styl'],
    providers: [EventosService]
})

export class EventosComponent implements OnInit {
    eventos: Evento[] = []

    constructor(private _router: Router){

    }

    ngOnInit(){

    }

}
