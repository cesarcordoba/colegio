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

    static obtenerTagsNoticias(idNoticia: number){
        return axios.get(this.apiUrl + '/data/tag/obtenerTagsNoticias/' + idNoticia);
    }

    static obtenerTodoTags(){
        return axios.get(this.apiUrl + '/data/tag/obtenerTodoTags');
    }

    static ligarTag(idTag: number, idNoticia: number){
        return axios.post(this.apiUrl + '/data/tag/union/' + idTag + '/' + idNoticia);
    }

    static desligarTag(idTag: number, idNoticia: number){
        return axios.delete(this.apiUrl + '/data/tag/union/' + idTag + '/' + idNoticia);
    }

    static crearTag(tag){
        return axios.post(this.apiUrl + '/data/tag/crearTag', tag);
    }

    static agregarCategoria(idNoticia, categoria){
        return axios.put(this.apiUrl + '/data/categorias/agregarCategoria/' + idNoticia, categoria);
    }

    static eliminarCategoriaNoticia(idNoticia, data){
        return axios.put(this.apiUrl + '/data/categorias/eliminarCategoriaNoticia/' +  idNoticia, data);
    }

    static obtenerSoloInstituciones(){
        return axios.get(this.apiUrl + '/data/obtenerSoloInstituciones');
    }

    static obtenerSoloActualidades(){
        return axios.get(this.apiUrl + '/data/obtenerSoloActualidades');
    }

    static obtenerSoloPrensa(){
        return axios.get(this.apiUrl + '/data/obtenerSoloPrensa');
    }

    static paginacion(items, pagina){
        return axios.get(this.apiUrl + '/data/noticias/paginacion/' + items + '/' + pagina);
    }

    static filtro(peticion){
        return axios.put(this.apiUrl + '/data/noticias/filtro', peticion);
    }


}
