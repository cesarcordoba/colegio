import {Component, OnInit, Input} from '@angular/core';
import {  FormControl } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

import { MatChipInputEvent } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

import {NoticiasService} from '../../../../../services/noticias.service';
import { EventEmitter } from 'protractor';
import {Tag} from '../../../../../models/tag.model';


@Component({
    selector: 'tag',
    templateUrl: './tag.component.pug',
    styleUrls: ['./tag.component.styl'],
    providers: [NoticiasService]
})

export class TagComponent implements OnInit{
    @Input() idNoticia: number;
    tags = [];
    tag: Tag;
    allTags = [];
    filtroTagsCtrl: FormControl;
    filteredTags: Observable<any[]>;
    separatorKeysCodes = [ENTER, COMMA];

    constructor(){
        this.tag = new Tag('');
        this.filtroTagsCtrl = new FormControl();
        this.filteredTags = this.filtroTagsCtrl.valueChanges
        .pipe(
            startWith(''),
            map(tagNombre => tagNombre ? this.filterTags(tagNombre) : this.allTags.slice())
        );
    }

    filterTags(name: string) {
        return this.allTags.filter(tag =>
        tag.nombre.toLowerCase().indexOf(name.toLowerCase()) === 0);
    }

    add(event: MatChipInputEvent, tag?: Tag): void {
        const input = event.input;
        const value = event.value;
        tag === undefined ? this.createTag(value) : this.addTag(tag);

        // Reinicia el valor del tag
        if (input) {
            input.value = '';
        }
    }

    createTag(value: string) {
        console.log("estas en createTag papu")
        if ((value || '').trim()) {
            console.log("pasaste el IF")
            let tag = this.tags.find(n  => n.nombre === value);
            tag ? (
                console.log("estas en verdadero del Ternary papu"),
                NoticiasService.ligarTag(tag.id, this.idNoticia).then(res => {
                    this.tags.push(tag);
                })
            ) : (
                console.log("estas en el falso del Ternary papu"),
                tag = new Tag(''),
                tag.nombre = value,
                NoticiasService.crearTag(tag).then(res => {
                    this.tags.push(res.data);
                    NoticiasService.ligarTag(res.data.id, this.idNoticia).then(response => console.log('pasaste'))
                })
            );
        }
    }

    addTag(tag: Tag) {
        console.log("estas en addTag papu")
        if ((tag.nombre).trim() !== '' && tag.nombre !==  undefined) {
            this.tags.push(tag);
            NoticiasService.ligarTag(tag.id, this.idNoticia)
            .then(response => console.log(response.data))

        }
    }

    remove(tag){

        this.tags.splice(this.tags.indexOf(tag),1)

        NoticiasService.desligarTag(tag.id, this.idNoticia)
        .then(response => console.log(response.data))
    }


    ngOnInit(){
        console.log(this.idNoticia)
        NoticiasService.obtenerTagsNoticias(this.idNoticia)
        .then(response => this.tags = response.data)
        .then(response => console.log(this.tags))

        NoticiasService.obtenerTodoTags()
        .then(response => this.allTags = response.data)
        .then(response => console.log(this.allTags))
    }
}
