import {Component, OnInit} from '@angular/core';
import {Noticia} from '../../../models/noticia.model'
import {NoticiasService} from '../../../services/noticias.service'
import { MatDialog } from '@angular/material'
import {NuevaNoticiaComponent} from '../noticias/nueva-noticia/nueva-noticia.component'
import { Router } from '@angular/router'

@Component({
    selector: 'noticias',
    templateUrl: './noticias.component.pug',
    styleUrls: ['./noticias.component.styl'],
    providers: [NoticiasService]
})

export class NoticiasComponent implements OnInit {
    noticias: Noticia[] = []

    constructor(private _router: Router, private dialog: MatDialog){
        NoticiasService.obtener()
        .then(response => this.noticias = response.data.map(n => new Noticia(n)))
    }

    verNoticia(id: number){
        this._router.navigate(['/admin/noticias/' + id]);

    }

    crearNueva(){
        this.dialog.open(NuevaNoticiaComponent ,{
            width: '290px',
            height: '200px'
        }).afterClosed().subscribe(result => {
            console.log(result)

        });
    }

    ngOnInit(){

    }

}
