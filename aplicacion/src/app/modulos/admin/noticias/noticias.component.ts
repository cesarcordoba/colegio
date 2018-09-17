import {Component, OnInit} from '@angular/core';
import {Noticia} from '../../../models/noticia.model'
import {NoticiasService} from '../../../services/noticias.service'
import { Router } from '@angular/router'

@Component({
    selector: 'noticias',
    templateUrl: './noticias.component.pug',
    styleUrls: ['./noticias.component.styl'],
    providers: [NoticiasService]
})

export class NoticiasComponent implements OnInit {
    noticias: Noticia[] = []

    constructor(private _router: Router){
        NoticiasService.obtener()
        .then(response => this.noticias = response.data.map(n => new Noticia(n))
    }

    verNoticia(id: number){
        this._router.navigate(['/admin/noticias/' + id]);

    }

    ngOnInit(){

    }

}
