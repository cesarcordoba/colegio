export class Noticia {
    id: number;
    nombre: string;
    introduccion: string;
    descripcion: string;
    tipo: string;
    IdCategoria : number;

    constructor(arg){
        this.id = arg.id;
        this.nombre = arg.nombre;
        this.introduccion = arg.introduccion;
        this.descripcion = arg.descripcion;
        this.tipo = arg.tipo;
        this.IdCategoria = arg.IdCategoria;
    }

    obtenerImagenes(){
        console.log('obteniendo imagen')
    }

    modificarImagenes(){
        console.log('modificando imagen')
    }

    obtenerTags(){
        console.log('obteniendo tags')
    }

    modificarTags(){
        console.log('modificando tags')
    }

    obtenerPortadas(){
        console.log('obteniendo portada')
    }

    modificarPortadas(){
        console.log('modificando portada')
    }

}
