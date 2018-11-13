import { PortadaService } from './../services/portada.service';
import { EventosService } from '../services/eventos.service';
import { switchCase } from 'babel-types';

export class Evento {
    id: number;
    nombre: string;
    descripcion: string;
    ubicacion: string;
    fecha: Date;
    hora: string;
    categoria: any;
    portada: any;
    color: any;

    constructor(arg){
        this.id = arg.id;
        this.nombre = arg.nombre;
        this.descripcion = arg.descripcion;
        this.ubicacion = arg.ubicacion;
        this.fecha = arg.fecha;
        this.hora = arg.hora;
        this.portada = this.cargarPortadas();

    }

    categorias(){
        return new Promise(resolve => {
            EventosService.obtenercategorias(this.id)
            .then(response => this.categoria = response.data)
            .then(response => {
                if(this.categoria.length > 0)
                    switch(this.categoria[0].nombre) { 
                        case "Ciencias Biológicas y de la salud": { 
                            return this.color = '#8bc24a'
         
                        } 
                        case "Ciencias Sociales y Humanidades": { 
                            return this.color = '#af40ff' 
  
                        }
                        case "Ciencias Exactas": { 
                            return this.color = '#37c3ff'
 
                        } 
                         case "Artes y Letras": { 
                            return this.color = '#ff5353' 

                        } 
                     } 

              
                else
                    this.color = 'grey'

            })
            .then(()=> resolve(this.color))
        })
    }

    cargarPortadas(){
        PortadaService.obtenerTodasEventos(this.id)
        .then(response => this.portada = response.data)
    }


}
