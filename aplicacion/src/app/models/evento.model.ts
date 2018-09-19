export class Evento {
    id: number;
    titulo: string;

    constructor(arg){
        this.id = arg.id;
        this.titulo = arg.titulo;
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
