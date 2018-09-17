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
        return axios.post(this.apisUrl + '/data/evento', evento);
    }

    static editar(evento){
        return axios.put(this.apiUrl + '/data/evento/' + evento.id, evento);
    }

    static eliminar(id: number){
        return axios.delete(this.apiUrl + '/data/evento/' + id);
    }
}
