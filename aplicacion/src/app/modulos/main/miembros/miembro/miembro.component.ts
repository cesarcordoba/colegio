import { Component, OnInit, Input } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { MiembrosService } from '../../../../services/miembros.service';
import { Miembro } from '../../../../models/miembro.model';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'miembro',
  templateUrl: './miembro.component.pug',
  styleUrls: ['./miembro.component.styl']
})

export class MiembroComponent implements OnInit {
    @Input() idMiembro: number;
    miembro : Miembro;
    mostrar : boolean = false;
    slideConfigNovedades = {};
    constructor(private _router: Router, private _route: ActivatedRoute){

    }


    ngOnInit() {

        MiembrosService.one(this.idMiembro)
        .then(response => this.miembro = new Miembro(response.data))
        .then(response => this.mostrar = true)
        .then(response => console.log(this.miembro))

    }

}
