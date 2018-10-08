export class Miembro {
    id: number;
    nombre: string;
    fecha: string;
    descripcion: string;

    constructor(arg){
        this.id = arg.id;
        this.nombre = arg.nombre;
        this.fecha= arg.fecha;
        this.descripcion = arg.descripcion;
    }

    get _id(): number {
        return this.id;
    }



}
