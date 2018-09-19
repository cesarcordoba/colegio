import {Component, OnInit} from '@angular/core';
import {Evento} from '../../../../models/evento.model';
import {EventosService} from '../../../../services/eventos.service';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
    selector: 'evento',
    templateUrl: './evento.component.pug',
    styleUrls: ['./evento.component.styl'],
    providers: [EventosService]
})

export class EventoComponent implements OnInit{
    evento : Evento;
    constructor(private _router: Router, private _route: ActivatedRoute){


    }


    ngOnInit(){
        this._route.params.subscribe(params => {
            EventosService.one(+params['id'])
            .then(response => this.evento = new Evento(response.data))
        })
    }

}
