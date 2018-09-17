
export class Imagen {
    private id: number;
    public imagen: string;

	constructor(arg) {
		this.id = arg.id;
		this.imagen = arg.imagen;
	}

    obtenerEventos(){

        console.log('obteniendo evento')

    }

    modificarEventos(){
        console.log('modificando evento')
    }

    obtenerNoticias(){
        console.log('obteniendo noticias')
    }

    modificarNoticias(){
        console.log('modificando noticias')
    }

}
