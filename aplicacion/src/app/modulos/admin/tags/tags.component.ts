import {Component, OnInit} from '@angular/core';
import {Tag} from '../../../models/tag.model'
import {TagsService} from '../../../services/tags.service'
import { Router } from '@angular/router'

@Component({
    selector: 'tags',
    templateUrl: './tags.component.pug',
    styleUrls: ['./tags.component.styl'],
    providers: [TagsService]
})

export class TagsComponent implements OnInit {
    tags: Tag[] = []

    constructor(private _router: Router){

    }

    ngOnInit(){

    }

}
