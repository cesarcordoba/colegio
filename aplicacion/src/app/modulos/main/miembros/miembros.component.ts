import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Miembro } from '../../../models/miembro.model';
import { MiembrosService } from '../../../services/miembros.service';
import { Categoria } from '../../../models/categoria.model';

@Component({
  selector: 'miembros',
  templateUrl: './miembros.component.pug',
  styleUrls: ['./miembros.component.styl'],
  encapsulation: ViewEncapsulation.None,
})

export class MiembrosComponent implements OnInit {
    IdMiembro: any;
    letras = [{}];
    miembros: Miembro[] = [];
    mostrar : boolean;
    constructor(private router: Router) { }

    mandarAMiembro(id){
        this.mostrar = false;
        this.IdMiembro = id;
        //this.router.navigate(['/miembros/' + id]);
    }

    regresar(){
        this.mostrar=true
        console.log(true)
    }

    ngOnInit() {
        this.mostrar = true;
        MiembrosService.obtener()
        .then(response => this.miembros = response.data.map(n => new Miembro(n)))
        .then(() =>console.log(this.miembros))

        this.letras = [
            {letra:'A'},{letra:'B'},{letra:'C'},
            {letra:'D'},{letra:'E'},{letra:'F'},
            {letra:'G'},{letra:'H'},{letra:'I'},
            {letra:'J'},{letra:'K'},{letra:'L'},
            {letra:'M'},{letra:'N'},{letra:'O'},
            {letra:'P'},{letra:'Q'},{letra:'R'},
            {letra:'S'},{letra:'T'},{letra:'U'},
            {letra:'V'},{letra:'W'},{letra:'X'},
            {letra:'Y'},{letra:'Z'}
        ]

    }

}
