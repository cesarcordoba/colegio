import { NoticiasService } from './../../../../services/noticias.service';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Noticia } from '../../../../models/noticia.model';
import { Router } from '@angular/router';

@Component({
    selector: 'instituciones',
    templateUrl: './instituciones.component.pug',
    styleUrls: ['./instituciones.component.styl'],
    encapsulation: ViewEncapsulation.None
})

export class InstitucionesComponent implements OnInit{

    slideInstitucionConf = {};
    instituciones : Noticia[] =[]

    constructor(private router: Router){}

    mandarNoticia(id){
        this.router.navigate(['/noticias/' + id]);
    }

    ngOnInit(){
        NoticiasService.obtenerSoloInstituciones()
        .then(response => this.instituciones = response.data.map(n => new Noticia(n)))
        this.slideInstitucionConf = {"slidesToShow": 1, "slidesToScroll": 1, "dots": true};

    }
}