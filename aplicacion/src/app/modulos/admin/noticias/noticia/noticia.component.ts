import {Component, OnInit} from '@angular/core';
import {Noticia} from '../../../../models/noticia.model';
import {NoticiasService} from '../../../../services/noticias.service';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
    selector: 'noticia',
    templateUrl: './noticia.component.pug',
    styleUrls: ['./noticia.component.styl'],
    providers: [NoticiasService]
})

export class NoticiaComponent implements OnInit{
    noticia : Noticia;
    constructor(private _router: Router, private _route: ActivatedRoute){


    }


    ngOnInit(){
        this._route.params.subscribe(params => {
            NoticiasService.one(+params['id'])
            .then(response => this.noticia = new Noticia(response.dataack))
        })
    }

}
