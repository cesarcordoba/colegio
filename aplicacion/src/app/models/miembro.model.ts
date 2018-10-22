import { PortadaService } from './../services/portada.service';
import { MiembrosService } from "../services/miembros.service";

export class Miembro {
    
    id: number;
    nombre: string;
    fecha: string;
    descripcion: string;
    categoria: any;
    portada: any;
    eventos: any;
    
    constructor(arg){
        this.id = arg.id;
        this.nombre = arg.nombre;
        this.fecha= arg.fecha;
        this.descripcion = arg.descripcion;
        this.categoria = this.categorias();
        this.portada = this.cargarPortada();
        this.eventos = this.cargarEventos();
    }

    categorias(){
         MiembrosService.obtenercategorias(this.id)
        .then(response =>  this.categoria = response.data[0].Categoria.nombre + " - " + response.data[0].nombre)
    }

    get _id(): number {
        return this.id;
    }

    cargarPortada(){
       PortadaService.obtenerTodasMiembros(this.id)
       .then(response => this.portada = response.data)
    }

    cargarEventos(){
        MiembrosService.obtenerEventos(this.id)
        .then(response => this.eventos = response.data)
    }



}
