import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
// declare let toastr;

@Component({
    selector: 'app-events-list',
    template: `
    <div>
    <h1>Upcoming Angular Events 2019</h1>
    <hr/>
    <div class="row">
    <div *ngFor="let event of events" class="col-md-5">
    <app-event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></app-event-thumbnail>
    </div>
    </div>
    </div>
    `
})
export class EventsListComponent implements OnInit {
  events: any[];
  constructor (private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute ) {

   // this.events = this.eventService.getEvents();
   // console.log('pass eventService');
  }
  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
    // this.eventService.getEvents().subscribe(events => { this.events = events; });
    // console.log('passing ngOnInit');
  }
  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }
}
