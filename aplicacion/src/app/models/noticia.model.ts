import { NoticiasService } from "../services/noticias.service";
import { PortadaService } from "../services/portada.service";

export class Noticia {
    id: number;
    nombre: string;
    introduccion: string;
    descripcion: string;
    tipo: string;
    IdCategoria : number;
    color: any;
    tags: any;
    portada: any

    constructor(arg){
        this.id = arg.id;
        this.nombre = arg.nombre;
        this.introduccion = arg.introduccion;
        this.descripcion = arg.descripcion;
        this.tipo = arg.tipo;
        this.IdCategoria = arg.IdCategoria;
        this.color = this.asignarColor();
        this.portada = this.cargarPortada();
        this.tags = this.cargarTags();
    }

    asignarColor(){
        if(this.tipo === "Institución"){
            return this.color = '#37c3ff'
        }else if(this.tipo ==="Prensa"){
            return this.color = '#4ea502'
        }else if(this.tipo === "Actualidad"){
            return this.color = '#a8004c'
        }
    }

    cargarPortada(){
        PortadaService.obtenerTodasNoticias(this.id)
        .then(response => this.portada = response.data)
     }

    cargarTags(){
        NoticiasService.obtenerTagsNoticias(this.id)
        .then(response => this.tags = response.data)
    }

}
