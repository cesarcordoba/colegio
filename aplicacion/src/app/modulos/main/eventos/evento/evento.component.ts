import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'evento',
  templateUrl: './evento.component.pug',
  styleUrls: ['./evento.component.styl']
})

export class EventoComponent implements OnInit {

    constructor(private _router: Router, private _route: ActivatedRoute){

    }

    ngOnInit() {

    }

}
