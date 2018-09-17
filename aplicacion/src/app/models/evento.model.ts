export class Evento {
    id: number;
    nombre: string;

    constructor(arg){
        this.id = arg.id;
        this.nombre = arg.nombre;
    }

    obtenerCategorias(){

        console.log('obteniendo categorias')

    }

    modificarCategorias(){
        console.log('modificando categorias')
    }

    obtenerMiembros(){
        console.log('obteniendo miembros')
    }

    modificarMiembros(){
        console.log('modificando miembros')
    }

    obtenerPortadas(){
        console.log('obteniendo portada')
    }

    modificarPortadas(){
        console.log('modificando portada')
    }

    obtenerImagenes(){

        console.log('obteniendo imagen')

    }

    modificarImagenes(){
        console.log('modificando imagen')
    }

}
