import { EventosService } from './../../../services/eventos.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Evento } from '../../../models/evento.model';
import { MatDialog } from '@angular/material';
import { Noticia } from '../../../models/noticia.model';
import { NoticiasService } from '../../../services/noticias.service';
import { BoletinComponent } from './boletin/boletin.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.pug',
  styleUrls: ['./home.component.styl'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
    eventos: Evento[] = []
    noticias: Noticia[] = []
    correo : {nombre: ''}
    valor: number  = 1
    muestra : boolean = true;
    slides = [{}];
    slideConfig = {};
    slidesNoticias = [{}];
    slideConfigNoticias = {};
    slidesGrids = [{}];
    slideConfigGrid = {};
    slidesVivos = [{}];
    novedades = [{}];
    slideConfigNovedades = {};

  constructor(private router: Router, private dialog: MatDialog) { }
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

        this.slidesVivos = [

            {introduccion:"Transmisiones en Vivo 1."},
            {introduccion:"Transmisiones en Vivo 2."},
            {introduccion:"Transmisiones en Vivo 3."},
            {introduccion:"Transmisiones en Vivo 4."},
            {introduccion:"Transmisiones en Vivo 5."}

        ];
        this.novedades = [

            {nombre:"Sintoniza desde donde estes las transmisiones de los eventos del colegio nacional", img: "assets/images/novedades.png", fecha:"14 Agosto 1993"},
            {nombre:"Sintoniza desde donde estes las transmisiones de los eventos del colegio nacional", img: "assets/images/novedades.png", fecha:"15 Agosto 1994"},
            {nombre:"Sintoniza desde donde estes las transmisiones de los eventos del colegio nacional", img: "assets/images/novedades.png", fecha:"16 Agosto 1995"},
            {nombre:"Sintoniza desde donde estes las transmisiones de los eventos del colegio nacional", img: "assets/images/novedades.png", fecha:"17 Agosto 1996"},
            {nombre:"Sintoniza desde donde estes las transmisiones de los eventos del colegio nacional", img: "assets/images/novedades.png", fecha:"14 Agosto 1993"},
            {nombre:"Sintoniza desde donde estes las transmisiones de los eventos del colegio nacional", img: "assets/images/novedades.png", fecha:"15 Agosto 1994"}
        ];

        

    }
    submit(dato){
        console.log(dato)
        console.log("si hay click")
    }

    cambiar(dato){
        switch(dato) { 
            case 1: {
                this.valor = 1
               break; 
            } 
            case 2: {
                this.valor = 2
               break; 
            }
            case 3: {
                this.valor = 3
                break; 
             } 
         } 
   
    }

    mandarEvento(id){
        this.router.navigate(['/eventos/' + id]);
    }

    abrirBoletin(){
		this.dialog.open(BoletinComponent ,{
            width: '526px',
            height: '130px'
		}).afterClosed().subscribe(result => {
			this.muestra = result
		});
	}
    
  ngOnInit() {
        this.slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};
        this.slideConfigNoticias = {"slidesToShow": 1, "slidesToScroll": 1};
        this.slideConfigGrid = {"slidesToShow": 4, "slidesToScroll": 1};
        this.slideConfigNovedades = {"slidesToShow": 3, "slidesToScroll": 1};
        this.cargarDatos();

        EventosService.obtener()
        .then(response => {
            var algo = response.data.map(n => new Evento(n))

            Promise.all(
                algo.map( async (evento) => await evento.categorias())
              )
            .then(() => this.eventos = algo)
        
        })
        
        NoticiasService.obtener()
        .then(response => this.noticias = response.data.map(n => new Noticia(n)))

  }

}
