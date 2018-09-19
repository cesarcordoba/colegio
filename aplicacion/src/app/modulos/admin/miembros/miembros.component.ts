import {Component, OnInit} from '@angular/core';
import {Miembro} from '../../../models/miembro.model'
import {MiembrosService} from '../../../services/miembros.service'
import { MatDialog } from '@angular/material'
import { ConfirmDelDialogComponent } from '../fragments/confirm-del-dialog/confirm-del-dialog.component'
import { NuevoMiembroComponent } from '../miembros/nuevo-miembro/nuevo-miembro.component'
import { Router } from '@angular/router'

@Component({
    selector: 'miembros',
    templateUrl: './miembros.component.pug',
    styleUrls: ['./miembros.component.styl'],
    providers: [MiembrosService]
})

export class MiembrosComponent implements OnInit {
    miembros: Miembro[] = []

    constructor(private _router: Router, private dialog: MatDialog){
        MiembrosService.obtener()
        .then(response => this.miembros = response.data.map(n => new Miembro(n)))
    }

    crearNuevo(){
        this.dialog.open(NuevoMiembroComponent ,{
            width: '290px',
            height: '200px'
        }).afterClosed().subscribe(result => {
            result ?
                MiembrosService.crear(result)
                .then(response => this.miembros.push(new Miembro(response.data)))
                .then(res=> console.log(this.miembros))
            : null;
        });
    }

    eliminarMiembro(miembro){
        this.dialog.open(ConfirmDelDialogComponent,{
            width: '290px',
            height: '200px'
        }).afterClosed().subscribe(result => {
            result ?
                MiembrosService.eliminar(miembro.id)
                .then(response => this.miembros.splice(this.miembros.indexOf(miembro),1))
                : null;

        });
    }

    mandarAMiembro(id){

            this._router.navigate(['/admin/miembros/' + id]);
        }


    ngOnInit(){

    }

}
