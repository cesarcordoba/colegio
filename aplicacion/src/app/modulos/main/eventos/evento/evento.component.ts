import { EventosService } from './../../../../services/eventos.service';
import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Evento } from '../../../../models/evento.model';

@Component({
  selector: 'evento',
  templateUrl: './evento.component.pug',
  styleUrls: ['./evento.component.styl'],
  encapsulation: ViewEncapsulation.None
})

export class EventoComponent implements OnInit {

    evento : Evento;
    idEvento : number;

    constructor(private _router: Router, private _route: ActivatedRoute){

    }

    ngOnInit() {

      this._route.params.subscribe(params => {
        this.idEvento = +params['id'];
        EventosService.one(+params['id'])
        .then(response => {
            var algo = new Evento(response.data)
            algo.categorias()
            this.evento = algo
        })
      })

    }

}
