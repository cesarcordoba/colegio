import {Component, OnInit} from '@angular/core';
import {Miembro} from '../../../models/miembro.model'
import {MiembrosService} from '../../../services/miembros.service'
import { Router } from '@angular/router'

@Component({
    selector: 'miembros',
    templateUrl: './miembros.component.pug',
    styleUrls: ['./miembros.component.styl'],
    providers: [MiembrosService]
})

export class MiembrosComponent implements OnInit {
    miembros: Miembro[] = []

    constructor(private _router: Router){
    }

    ngOnInit(){

    }

}
