import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Noticia } from '../../../../models/noticia.model';
import { NoticiasService } from '../../../../services/noticias.service';
import { Router } from '@angular/router';

@Component({
    selector: 'actualidad',
    templateUrl: './actualidad.component.pug',
    styleUrls: ['./actualidad.component.styl'],
    encapsulation: ViewEncapsulation.None
})

export class ActualidadComponent implements OnInit{

    actualidades : Noticia[] = []
    slideActualidadConf = {};

    constructor(private router: Router){}

    mandarNoticia(id){
        this.router.navigate(['/noticias/' + id]);
    }

    ngOnInit(){

        NoticiasService.obtenerSoloActualidades()
        .then(response => this.actualidades = response.data.map(n => new Noticia(n)))
        this.slideActualidadConf = {"slidesToShow": 1, "slidesToScroll": 1, "dots": true};
         
    }
}