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
    paginas : number;
    noticias: Noticia[] = []
    filtros = {
        pagina: 1,
        limite: 6,
        peticion: {
            tipo : {},
            nombre : {}
        }
    }
    constructor(private router: Router) { }

    mandarNoticia(id){
        this.router.navigate(['/noticias/' + id]);
    }

    anterior(){ 
        this.filtros.pagina = this.filtros.pagina - 1;
        this.obtener()
    }

    siguiente(){ 
        this.filtros.pagina = this.filtros.pagina + 1;
        this.obtener()
    }
    
    obtenerxTipo(tipo){
        switch(tipo) {
            case 0: { 
                this.filtros.peticion.tipo = {};
                this.obtener()
                break; 
            }
            case 1: { 
                this.filtros.peticion.tipo = tipo;
                this.obtener()
               break; 
            } 
            case 2: {
                this.filtros.peticion.tipo = tipo;
                this.obtener()
               break; 
            } 
            case 3: {
                this.filtros.peticion.tipo = tipo;
                this.obtener()
                break; 
             } 
         } 
    }

    filtroNombre(nombre){
        this.filtros.peticion.nombre = nombre
        this.obtener()
    }

    obtener(){
        NoticiasService.filtro(this.filtros).then(response => {
            this.paginas = response.data.paginas;
            this.noticias = response.data.items.map(n => new Noticia(n))
            console.log(response.data)
        })
    }

    ngOnInit() {
        this.obtener()
       
    }

}