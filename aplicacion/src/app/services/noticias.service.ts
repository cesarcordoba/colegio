import { Injectable } from '@angular/core'
import { APILOCAL } from '../../environments/environment'
import * as axi from 'axios'
var axios = axi.default;

@Injectable()

export class NoticiasService {

    private static apiUrl: string = APILOCAL.url;
    static obtener(){
        return axios.get(this.apiUrl + '/data/noticia' );
    }

    static one(id: number){
        return axios.get(this.apiUrl + '/data/noticia/' + id);
    }

    static crear(noticia){
        return axios.post(this.apiUrl + '/data/noticia', noticia);
    }

    static editar(noticia){
        return axios.put(this.apiUrl + '/data/noticia/' + noticia.id, noticia);
    }

    static eliminar(id: number){
        return axios.delete(this.apiUrl + '/data/noticia/' + id);
    }

}
