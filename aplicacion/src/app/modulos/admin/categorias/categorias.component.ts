import {Component, OnInit} from '@angular/core';
import {Categoria} from '../../../models/categoria.model';
import {CategoriasService} from '../../../services/categorias.service';
import {Router} from '@angular/router';

@Component({
    selector: 'categoria',
    templateUrl: './categorias.component.pug',
    styleUrls: ['./categorias.component.styl'],
    providers: [CategoriasService]
})

export class CategoriasComponent implements OnInit{
    categorias : Categoria[] = []
    constructor(private _router: Router){
    }

    ngOnInit(){

    }
}
