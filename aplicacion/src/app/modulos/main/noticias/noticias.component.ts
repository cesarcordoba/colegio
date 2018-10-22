import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import {Noticia} from '../../../models/noticia.model';
import {NoticiasService} from '../../../services/noticias.service'

@Component({
  selector: 'noticias',
  templateUrl: './noticias.component.pug',
  styleUrls: ['./noticias.component.styl'],
  providers: [NoticiasService],
  encapsulation: ViewEncapsulation.None
})

export class NoticiasComponent implements OnInit {
    noticias: Noticia[] = []
    constructor(private router: Router) { }

    mandarNoticia(id){
        this.router.navigate(['/noticias/' + id]);
    }

    ngOnInit() {

        NoticiasService.obtener()
        .then(response => this.noticias = response.data.map(n => new Noticia(n)))
        .then(() =>console.log(this.noticias))
    }

}
