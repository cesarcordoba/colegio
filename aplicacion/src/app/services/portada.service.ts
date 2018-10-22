
import { Injectable } from '@angular/core'
import { APILOCAL } from '../../environments/environment'
import * as axi from 'axios'
var axios = axi.default;

@Injectable()

export class PortadaService {
    private static apiUrl: string = APILOCAL.url;

    static obtener(){
        return axios.get(this.apiUrl + '/data/portada' );
    }

    static one(id: number){
        return axios.get(this.apiUrl + '/data/portada/' + id);
    }

    static crear(portada){
        return axios.post(this.apiUrl + '/data/portada', portada);
    }

    static editar(portada){
        return axios.put(this.apiUrl + '/data/portada/' + portada.id, portada);
    }

    static eliminar(id: number){
        return axios.delete(this.apiUrl + '/data/portada/' + id);
    }

    static froala(){
        return axios.get(this.apiUrl + '/data/portadas/froala' );
    }

    static obtenerTodasMiembros(idTipo){
        return axios.get(this.apiUrl + '/data/portadas/obtenerTodasMiembros/' + idTipo);
    }

    static obtenerTodasNoticias(idTipo){
        return axios.get(this.apiUrl + '/data/portadas/obtenerTodasNoticias/' + idTipo);
    }

    static obtenerTodasEventos(idTipo){
        return axios.get(this.apiUrl + '/data/portadas/obtenerTodasEventos/' + idTipo);
    }
}
