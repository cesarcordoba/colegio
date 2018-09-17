export class Noticia {
    id: number;
    nombre: string;
    IdCategoria : number;

    constructor(arg){
        this.id = arg.id;
        this.nombre = arg.nombre;
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
