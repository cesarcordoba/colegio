import {Component, OnInit} from '@angular/core';
import {Noticia} from '../../../models/noticia.model'
import {NoticiasService} from '../../../services/noticias.service'
import { MatDialog } from '@angular/material'
import { ConfirmDelDialogComponent } from '../fragments/confirm-del-dialog/confirm-del-dialog.component'
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
            result ?
                NoticiasService.crear(result)
                .then(response => this.noticias.push(new Noticia(response.data)))
                .then(res=> console.log(this.noticias))
            : null;
        });
    }

    eliminarNoticia(noticia){
        this.dialog.open(ConfirmDelDialogComponent,{
            width: '290px',
            height: '200px'
        }).afterClosed().subscribe(result => {
            result ?
                NoticiasService.eliminar(noticia.id)
                .then(response => this.noticias.splice(this.noticias.indexOf(noticia),1))
                : null;

        });

    }
    mandarANoticia(id){

        this._router.navigate(['/admin/noticias/' + id]);
    }

    ngOnInit(){

    }

}
