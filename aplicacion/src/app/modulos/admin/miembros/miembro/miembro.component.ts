import {Component, OnInit} from '@angular/core';
import {Miembro} from '../../../../models/miembro.model';
import {MiembrosService} from '../../../../services/miembros.service';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
    selector: 'miembro',
    templateUrl: './miembro.component.pug',
    styleUrls: ['./miembro.component.styl'],
    providers: [MiembrosService]
})

export class MiembroComponent implements OnInit{
    miembro : Miembro;
    constructor(private _router: Router, private _route: ActivatedRoute){


    }


    ngOnInit(){
        this._route.params.subscribe(params => {
            MiembrosService.one(+params['id'])
            .then(response => this.miembro = new Miembro(response.data))
        })
    }

}
