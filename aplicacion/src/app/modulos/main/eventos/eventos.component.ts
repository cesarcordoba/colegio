import { EventosService } from './../../../services/eventos.service';
import { Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { Evento } from '../../../models/evento.model';

@Component({
  selector: 'eventos',
  templateUrl: './eventos.component.pug',
  styleUrls: ['./eventos.component.styl'],
  providers: [EventosService],
  encapsulation: ViewEncapsulation.None
})

export class EventosComponent implements OnInit {

    calendarOptions: Options;
    eventos: Evento[] = []
    eventosSlider = [{}];
    displayEvent: any;
    algo : any
    slideConfig = {};
    filtros = {
      pagina: 1,
      limite: 8,
      peticion: {
          categorias : {},
          nombre : {},
      }
  }
    @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
    constructor() { }

    filtrosXcategoria(categoria){
      this.filtros.peticion.categorias =  categoria
      this.obtener()        
    }

    filtroNombre(nombre){
      this.filtros.peticion.nombre = nombre
      this.obtener()
    }

    cargarEventos() {
        Promise.all(
          this.eventos.map( async (evento) => await evento.categorias())
        )
        .then(() => {
          this.algo = this.eventos.map(n => {
            return new Object({
              title:n.nombre,
              start:n.fecha,
              color: n.color
            })
          })

          this.eventosSlider = this.algo;

          this.calendarOptions = {
            editable: false,
            eventLimit: false,
            header: {
              left: 'prev,next today',
              center: 'title',
              right: null
            },
            selectable: true,
            events: this.algo,
            locale: 'es',
            eventColor: this.algo.color,
            eventRender: function(evento){
              console.log("funcion eventRender")
              console.log(evento)
            }
          };
        })
    }

    clickButton(model: any) {
        this.displayEvent = model;
        console.log("estas en la funcion clickButton")
    }
    dayClick(model: any) {
        console.log(model);
        console.log("estas en la funcion dayClick")
    }
    eventClick(model: any) {
        model = {
          event: {
            start: model.event.start,
            title: model.event.title,
            color: model.event.color
          },
          duration: {}
        }
        this.displayEvent = model;
        console.log(model);
    }
    updateEvent(model: any) {
        model = {
          event: {
            id: model.event.id,
            start: model.event.start,
            end: model.event.end,
            title: model.event.title
          },
          duration: {
            _data: model.duration._data
          }
        }
        this.displayEvent = model;
    }

    restaurarTodo(){
      this.filtros.peticion.categorias ={}
      this.filtros.peticion.nombre ={}
      this.obtener()
  }

    obtener(){
      EventosService.filtro(this.filtros).then(response => {
        console.log(response.data)
        this.eventos = response.data.items.map(n => new Evento(n))
      })
      .then(() => this.cargarEventos())
    }

    ngOnInit() {
      
      this.obtener();
      this.slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};
      this.eventosSlider = [
        {fecha: "10 noviembre 2018", texto:"No hay eventos programados"},
        {fecha: "11 noviembre 2018", texto:"No hay eventos programados"},
        {fecha: "12 noviembre 2018", texto:"Si hay eventos programados :D"},
        {fecha: "13 noviembre 2018", texto:"No hay eventos programados"}
      ];
    }
  
}
