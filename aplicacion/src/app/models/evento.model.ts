export class Evento {
    id: number;
    nombre: string;
    descripcion: string;
    ubicacion: string;
    fecha: Date;
    hora: string;

    constructor(arg){
        this.id = arg.id;
        this.nombre = arg.nombre;
        this.descripcion = arg.descripcion;
        this.ubicacion = arg.ubicacion;
        this.fecha = arg.fecha;
        this.hora = arg.hora;
    }


}
