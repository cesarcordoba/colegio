import { Injectable } from '@angular/core';
import { APILOCAL } from '../../environments/environment';
import * as axi from 'axios';
var axios = axi.default;

@Injectable()

export class CategoriasService {
    private static apiUrl: string = APILOCAL.url;

    static obtener(){
        return axios.get(this.apiUrl + '/data/categoria');
    }

    static one(id: number){
        return axios.get(this.apiUrl + '/data/categoria/' + id);
    }

    static crear(categoria){
        return axios.post(this.apiUrl + '/data/categoria', categoria);
    }

    static editar(categoria){
        return axios.put(this.apiUrl + '/data/categoria/' + categoria.id, categoria);
    }

    static eliminar(id: number){
        return axios.delete(this.apiUrl + '/data/categoria/' + id);
    }
}
