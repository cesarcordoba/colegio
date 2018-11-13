import { NoticiasService } from './../../../../services/noticias.service';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Noticia } from '../../../../models/noticia.model';
import { Router } from '@angular/router';

@Component({
    selector: 'prensa',
    templateUrl: './prensa.component.pug',
    styleUrls: ['./prensa.component.styl'],
    encapsulation: ViewEncapsulation.None
})

export class PrensaComponent implements OnInit{
    slidePrensaConf = {}
    prensas : Noticia[] = []

    constructor(private router: Router){}

    mandarNoticia(id){
        this.router.navigate(['/noticias/' + id]);
    }

    ngOnInit(){

        NoticiasService.obtenerSoloPrensa()
        .then(response => this.prensas = response.data.map(n => new Noticia(n)))
        this.slidePrensaConf = {"slidesToShow": 1, "slidesToScroll": 1, "dots": true};

    }
}