import { Injectable } from '@angular/core'
import { APILOCAL } from '../../environments/environment'
import * as axi from 'axios'
var axios = axi.default;

@Injectable()

export class EventosService {

    private static apiUrl: string = APILOCAL.url;
    static obtener(){
        return axios.get(this.apiUrl + '/data/evento' );
    }

    static one(id: number){
        return axios.get(this.apiUrl + '/data/evento/' + id);
    }

    static crear(evento){
        return axios.post(this.apiUrl + '/data/evento', evento);
    }

    static editar(evento){
        return axios.put(this.apiUrl + '/data/evento/' + evento.id, evento);
    }

    static eliminar(id: number){
        return axios.delete(this.apiUrl + '/data/evento/' + id);
    }

    static unirACategoria(idEvento, idCategoria){
        return axios.post(this.apiUrl + '/data/unirEventosxCategoria/' + idEvento + '/' + idCategoria);
    }

    static obtenercategorias(idEvento){
        return axios.get(this.apiUrl + '/data/obtenerEventosxCategoria/' + idEvento);
    }

    static borrarUnionACategoria(idEvento, idCategoria){
        return axios.delete(this.apiUrl + '/data/unirEventosxCategoria/' + idEvento + '/' + idCategoria);
    }

    static unirAMiembro(idEvento, idMiembro){
        return axios.post(this.apiUrl + '/data/unirEventosxMiembros/' + idEvento + '/' + idMiembro);
    }

    static obtenermiembros(idEvento){
        return axios.get(this.apiUrl + '/data/obtenerEventosxMiembros/' + idEvento);
    }

    static borrarUnionAMiembro(idEvento, idMiembro){
        return axios.delete(this.apiUrl + '/data/unirEventosxMiembros/' + idEvento + '/' + idMiembro);
    }
}
