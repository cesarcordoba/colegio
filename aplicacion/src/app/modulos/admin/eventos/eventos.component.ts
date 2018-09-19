import {Component, OnInit} from '@angular/core';
import {Evento} from '../../../models/evento.model'
import {EventosService} from '../../../services/eventos.service'
import { MatDialog } from '@angular/material'
import { ConfirmDelDialogComponent } from '../fragments/confirm-del-dialog/confirm-del-dialog.component'
import { NuevoEventoComponent } from '../eventos/nuevo-evento/nuevo-evento.component';
import { Router } from '@angular/router'

@Component({
    selector: 'eventos',
    templateUrl: './eventos.component.pug',
    styleUrls: ['./eventos.component.styl'],
    providers: [EventosService]
})

export class EventosComponent implements OnInit {
    eventos: Evento[] = []

    constructor(private _router: Router, private dialog: MatDialog){
        EventosService.obtener()
        .then(response => this.eventos = response.data.map(n => new Evento(n)))
    }

    crearNuevo(){
        this.dialog.open(NuevoEventoComponent ,{
            width: '290px',
            height: '200px'
        }).afterClosed().subscribe(result => {
            result ?
                EventosService.crear(result)
                .then(response => this.eventos.push(new Evento(response.data)))
                .then(res=> console.log(this.eventos))
            : null;

        });
    }

    eliminarEvento(evento){
        this.dialog.open(ConfirmDelDialogComponent,{
            width: '290px',
            height: '200px'
        }).afterClosed().subscribe(result => {
            result ?
                EventosService.eliminar(evento.id)
                .then(response => this.eventos.splice(this.eventos.indexOf(evento),1))
                : null;

        });

    }

    mandarAEvento(id){

        this._router.navigate(['/admin/eventos/' + id]);
    }

    ngOnInit(){

    }

}
