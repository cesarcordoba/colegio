import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'miembros',
  templateUrl: './miembros.component.pug',
  styleUrls: ['./miembros.component.styl']
})

export class MiembrosComponent implements OnInit {

    letras = [{}];
    constructor(private router: Router) { }

    ngOnInit() {

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
