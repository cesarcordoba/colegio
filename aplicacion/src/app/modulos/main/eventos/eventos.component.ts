import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { EventosService } from '../../../services/eventos.service';

@Component({
  selector: 'eventos',
  templateUrl: './eventos.component.pug',
  styleUrls: ['./eventos.component.styl'],
  providers: [EventosService],
})

export class EventosComponent implements OnInit {

    calendarOptions: Options;
    displayEvent: any;
    events = null;
    @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
    constructor() { }

    loadevents() {
        EventosService.getEvents().subscribe(data => {
          this.events = data;
        });
    }
    clickButton(model: any) {
        this.displayEvent = model;
    }
    dayClick(model: any) {
        console.log(model);
    }
    eventClick(model: any) {
        model = {
          event: {
            id: model.event.id,
            start: model.event.start,
            end: model.event.end,
            title: model.event.title,
            allDay: model.event.allDay
            // other params
          },
          duration: {}
        }
        this.displayEvent = model;
    }
    updateEvent(model: any) {
        model = {
          event: {
            id: model.event.id,
            start: model.event.start,
            end: model.event.end,
            title: model.event.title
            // other params
          },
          duration: {
            _data: model.duration._data
          }
        }
        this.displayEvent = model;
    }
    ngOnInit() {

    this.calendarOptions = {
        editable: true,
        eventLimit: false,
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay,listMonth'
          },
        selectable: true,
        events: [],
          };
    }


}
