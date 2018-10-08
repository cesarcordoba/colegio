import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'miembro',
  templateUrl: './miembro.component.pug',
  styleUrls: ['./miembro.component.styl']
})

export class MiembroComponent implements OnInit {

    constructor(private _router: Router, private _route: ActivatedRoute){

    }

    ngOnInit() {

    }

}
