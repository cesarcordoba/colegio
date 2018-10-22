import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'institucion',
  templateUrl: './institucion.component.pug',
  styleUrls: ['./institucion.component.styl'],
   encapsulation: ViewEncapsulation.None,
})

export class InstitucionComponent implements OnInit {

    slides = [{}];
    fechas = [{}];
    constructor(private router: Router) { }

    ngOnInit() {

        this.slides = [
            {nombre: '1943'},{nombre: '1968'},
            {nombre: '1971'},{nombre: '1993'},
            {nombre: '1994'},{nombre: '2003'},
            {nombre: '2012'},{nombre: '2013'},
            {nombre: '2016'},{nombre: '2018'}
        ]

        this.fechas = [
            {fecha: '1943'},{fecha: '1968'},
            {fecha: '1971'},{fecha: '1993'},
            {fecha: '1994'},{fecha: '2003'},
            {fecha: '2012'},{fecha: '2013'},
            {fecha: '2016'},{fecha: '2018'}
        ]
    }
}
