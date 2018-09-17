export class Tag {
    id: number;
    nombre: string;

    constructor(arg){
        this.id = arg.id;
        this.nombre = arg.nombre;
    }

    obtenerNoticias(){
        console.log('obteniendo noticias')
    }

    modificarNoticias(){
        console.log('modificando noticias')
    }

}
