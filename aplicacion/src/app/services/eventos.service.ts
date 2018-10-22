import { Injectable } from '@angular/core'
import { APILOCAL } from '../../environments/environment'
import * as axi from 'axios'
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
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
    static getEvents(): Observable<any> {
        const dateObj = new Date();
        const yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
        let data: any = [{
            title: 'All Day Event',
            start: yearMonth + '-01'
        },
        {
            title: 'Long Event',
            start: yearMonth + '-07',
            end: yearMonth + '-10'
        },
        {
            id: 999,
            title: 'Repeating Event',
            start: yearMonth + '-09T16:00:00'
        },
        {
            id: 999,
            title: 'Repeating Event',
            start: yearMonth + '-16T16:00:00'
        },
        {
            title: 'Conference',
            start: yearMonth + '-11',
            end: yearMonth + '-13'
        },
        {
            title: 'Meeting',
            start: yearMonth + '-12T10:30:00',
            end: yearMonth + '-12T12:30:00'
        },
        {
            title: 'Lunch',
            start: yearMonth + '-12T12:00:00'
        },
        {
            title: 'Meeting',
            start: yearMonth + '-12T14:30:00'
        },
        {
            title: 'Happy Hour',
            start: yearMonth + '-12T17:30:00'
        },
        {
            title: 'Dinner',
            start: yearMonth + '-12T20:00:00'
        },
        {
            title: 'Birthday Party',
            start: yearMonth + '-13T07:00:00'
        },
        {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: yearMonth + '-28'
        }];
        return of(data);
    }
}
