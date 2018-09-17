
import { Injectable } from '@angular/core'
import { APILOCAL } from '../../environments/environment'
import * as axios from 'axios'

@Injectable()

export class ImagenService {
    private static apiUrl: string = APILOCAL.url;

    static obtener(){
        return axios.get(this.apiUrl + '/data/imagen' );
    }

    static one(id: number){
        return axios.get(this.apiUrl + '/data/imagen/' + id);
    }

    static crear(imagen){
        return axios.post(this.apiUrl + '/data/imagen', imagen);
    }

    static editar(imagen){
        return axios.put(this.apiUrl + '/data/imagen/' + imagen.id, imagen);
    }

    static eliminar(id: number){
        return axios.delete(this.apiUrl + '/data/imagen/' + id);
    }
}
