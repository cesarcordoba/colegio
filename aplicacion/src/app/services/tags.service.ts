import { Injectable } from '@angular/core'
import { APILOCAL } from '../../environments/environment'
import * as axi from 'axios'
var axios = axi.default;

@Injectable()

export class TagsService {

    private static apiUrl: string = APILOCAL.url;
    static obtener(){
        return axios.get(this.apiUrl + '/data/tag' );
    }

    static one(id: number){
        return axios.get(this.apiUrl + '/data/tag/' + id);
    }

    static crear(tag){
        return axios.post(this.apiUrl + '/data/tag', tag);
    }

    static editar(tag){
        return axios.put(this.apiUrl + '/data/tag/' + tag.id, tag);
    }

    static eliminar(id: number){
        return axios.delete(this.apiUrl + '/data/tag/' + id);
    }

}
