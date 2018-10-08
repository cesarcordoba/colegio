import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'noticia',
  templateUrl: './noticia.component.pug',
  styleUrls: ['./noticia.component.styl']
})

export class NoticiaComponent implements OnInit {

    constructor(private _router: Router, private _route: ActivatedRoute){

    }

    ngOnInit() {

    }

}
