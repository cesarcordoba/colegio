export class Miembro {
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

    obtenerEventos(){
        console.log('obteniendo eventos')
    }

    modificarEventos(){
        console.log('modificando eventos')
    }

}
