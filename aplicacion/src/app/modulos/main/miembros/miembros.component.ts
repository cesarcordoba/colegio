import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Miembro } from '../../../models/miembro.model';
import { MiembrosService } from '../../../services/miembros.service';

@Component({
  selector: 'miembros',
  templateUrl: './miembros.component.pug',
  styleUrls: ['./miembros.component.styl'],
  encapsulation: ViewEncapsulation.None,
})

export class MiembrosComponent implements OnInit {
    paginas: number;
    IdMiembro: any;
    letras = [{}];
    miembros: Miembro[] = [];
    mostrar : boolean;
    filtros = {
        pagina: 1,
        limite: 8,
        peticion: {
            categorias : {},
            letras : {},
            nombre : {},
            fechas : {}
        }
    }

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

    anterior(){ 
        this.filtros.pagina = this.filtros.pagina - 1;
        this.obtener()
    }

    siguiente(){ 
        this.filtros.pagina = this.filtros.pagina + 1;
        this.obtener()
    }

    filtrarXletras(letra){
        this.filtros.peticion.letras = letra.letra
        this.obtener()
    }

    filtrosXcategoria(categoria){

        this.filtros.peticion.categorias =  categoria
        this.obtener()        
    }

    filtroNombre(nombre){
        this.filtros.peticion.nombre = nombre
        this.obtener()
    }

    obtener(){
        MiembrosService.filtro(this.filtros).then(response => {
            this.paginas = response.data.paginas;
            this.miembros = response.data.items.map(n => new Miembro(n))
        })
    }

    filtrosXfecha(fechas){
        this.filtros.peticion.fechas = fechas;
        this.obtener()
    }

    restaurarTodo(){
        this.filtros.peticion.categorias ={}
        this.filtros.peticion.letras ={}
        this.filtros.peticion.nombre ={}
        this.filtros.peticion.fechas ={}
        this.obtener()
    }

    ngOnInit() {
        this.mostrar = true;
        this.obtener()
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
