import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'noticias',
  templateUrl: './noticias.component.pug',
  styleUrls: ['./noticias.component.styl'],
  encapsulation: ViewEncapsulation.None
})

export class NoticiasComponent implements OnInit {
    noticias = [{}];
    constructor(private router: Router) { }

    ngOnInit() {


        this.noticias = [
            {color:'#37c3ff', introduccion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', tipo: 'institucion'},
            {color: '#4ea502', introduccion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', tipo: 'prensa'},
            {color:'#a8004c', introduccion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', tipo: 'actualidad'},
            {color:'#37c3ff', introduccion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', tipo: 'institucion'},
            {color: '#4ea502', introduccion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', tipo: 'prensa'},
            {color:'#a8004c', introduccion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', tipo: 'actualidad'},
            {color:'#37c3ff', introduccion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', tipo: 'institucion'},
            {color: '#4ea502', introduccion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', tipo: 'prensa'},
            {color:'#a8004c', introduccion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', tipo: 'actualidad'},
        ]

    }

}
