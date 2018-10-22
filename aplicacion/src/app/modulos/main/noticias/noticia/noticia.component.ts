import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Noticia } from '../../../../models/noticia.model';
import { NoticiasService } from '../../../../services/noticias.service';

@Component({
  selector: 'noticia',
  templateUrl: './noticia.component.pug',
  styleUrls: ['./noticia.component.styl']
})

export class NoticiaComponent implements OnInit {

    noticia : Noticia;
    idNoticia : number;
    constructor(private _router: Router, private _route: ActivatedRoute){

    }

    ngOnInit() {
        this._route.params.subscribe(params => {
            this.idNoticia = +params['id'];
            NoticiasService.one(+params['id'])
            .then(response => this.noticia = new Noticia(response.data))
            .then(response => console.log(this.noticia))
        })
    }

}
