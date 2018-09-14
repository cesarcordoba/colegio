import { Component, OnInit } from '@angular/core';
import {TweenLite} from "gsap";
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.pug',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
