import { Injectable } from '@angular/core'
import { APILOCAL } from '../../environments/environment'
import * as axi from 'axios'
var axios = axi.default;

@Injectable()

export class MiembrosService {

    private static apiUrl: string = APILOCAL.url;
    static obtener(){
        return axios.get(this.apiUrl + '/data/miembro' );
    }

    static one(id: number){
        return axios.get(this.apiUrl + '/data/miembro/' + id);
    }

    static crear(miembro){
        return axios.post(this.apiUrl + '/data/miembro', miembro);
    }

    static editar(miembro){
        return axios.put(this.apiUrl + '/data/miembro/' + miembro.id, miembro);
    }

    static eliminar(id: number){
        return axios.delete(this.apiUrl + '/data/miembro/' + id);
    }

    static unirACategoria(idMiembro, idCategoria){
        return axios.post(this.apiUrl + '/data/unirMiembroxCategoria/' + idMiembro + '/' + idCategoria);
    }

    static obtenercategorias(idMiembro){
        return axios.get(this.apiUrl + '/data/obtenerMiembroxCategoria/' + idMiembro);
    }

    static borrarUnionACategoria(idMiembro, idCategoria){
        return axios.delete(this.apiUrl + '/data/unirMiembroxCategoria/' + idMiembro + '/' + idCategoria);
    }

    static obtenerMiembrosFull(){
        return axios.get(this.apiUrl + '/data/obtenerMiembrosFull');
    }

    static obtenerEventos(idMiembro){
        return axios.get(this.apiUrl + '/data/obtenerEventos/' + idMiembro);
    }

}
