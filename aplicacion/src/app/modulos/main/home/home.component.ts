import { Component, OnInit, ViewEncapsulation } from '@angular/core';
//import {TweenLite} from "gsap";
//import * as $ from 'jquery';
import { Router } from '@angular/router';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.pug',
  styleUrls: ['./home.component.styl'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {

    slides = [{}];
    slideConfig = {};
    slidesNoticias = [{}];
    slideConfigNoticias = {};
    slidesGrids = [{}];
    slideConfigGrid = {};
    slidesVivos = [{}];
    novedades = [{}];
    slideConfigNovedades = {};
  constructor(private router: Router) { }
    cargarDatos(){
        this.slides = [
            {img: "http://placehold.it/350x150/000000"},
            {img: "http://placehold.it/350x150/111111"},
            {img: "http://placehold.it/350x150/333333"},
            {img: "http://placehold.it/350x150/666666"}
        ];

        this.slidesNoticias = [

            {img: "http://placehold.it/350x150/111111"},
            {img: "http://placehold.it/350x150/333333"},
            {img: "http://placehold.it/350x150/666666"},
            {img: "http://placehold.it/350x150/000000"}
        ];

        this.slidesGrids = [

            {img: "http://placehold.it/350x150/333333", introduccion:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
            {img: "http://placehold.it/350x150/000000",  introduccion:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
            {img: "http://placehold.it/350x150/666666",  introduccion:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
            {img: "http://placehold.it/350x150/111111",  introduccion:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
            {img: "http://placehold.it/350x150/333333", introduccion:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
            {img: "http://placehold.it/350x150/000000",  introduccion:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
            {img: "http://placehold.it/350x150/666666",  introduccion:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
            {img: "http://placehold.it/350x150/111111",  introduccion:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}

        ];
        this.slidesVivos = [

            {introduccion:"Transmisiones en Vivo 1."},
            {introduccion:"Transmisiones en Vivo 2."},
            {introduccion:"Transmisiones en Vivo 3."},
            {introduccion:"Transmisiones en Vivo 4."},
            {introduccion:"Transmisiones en Vivo 5."}

        ];
        this.novedades = [

            {nombre:"Novedad 1", img: "http://placehold.it/350x150/000000", fecha:"14 Agosto 1993"},
            {nombre:"Novedad 2", img: "http://placehold.it/350x150/111111", fecha:"15 Agosto 1994"},
            {nombre:"Novedad 3", img: "http://placehold.it/350x150/333333", fecha:"16 Agosto 1995"},
            {nombre:"Novedad 4", img: "http://placehold.it/350x150/666666", fecha:"17 Agosto 1996"},
            {nombre:"Novedad 1", img: "http://placehold.it/350x150/000000", fecha:"14 Agosto 1993"},
            {nombre:"Novedad 2", img: "http://placehold.it/350x150/111111", fecha:"15 Agosto 1994"},
            {nombre:"Novedad 3", img: "http://placehold.it/350x150/333333", fecha:"16 Agosto 1995"},
            {nombre:"Novedad 4", img: "http://placehold.it/350x150/666666", fecha:"17 Agosto 1996"}
        ];

    }

  ngOnInit() {
        this.slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};
        this.slideConfigNoticias = {"slidesToShow": 1, "slidesToScroll": 1};
        this.slideConfigGrid = {"slidesToShow": 4, "slidesToScroll": 1};
        this.slideConfigNovedades = {"slidesToShow": 3, "slidesToScroll": 1};
        this.cargarDatos();

  }

}
