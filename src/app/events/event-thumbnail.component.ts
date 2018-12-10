import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared';
@Component({
    selector: 'app-event-thumbnail',
    template: `
    <h2>EVENT</h2>
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2>{{event?.name | uppercase}}</h2>
        <div>Date: {{event?.date |date:'dd/MM/yyyy'}}</div>
        <div [ngStyle]="getDateStyle()"  [ngSwitch]="event?.time">Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price:{{event?.price | currency:'USD'}}</div>
        <div *ngIf="event?.location">
            <span>Location: {{event?.location.address}}</span>
            <span class="pad-left">{{event?.location.city}},{{event?.location.country}}</span>
        </div>
        <div *ngIf="event?.onlineUrl"> Online URL: {{event?.onlineUrl}}</div>
    </div>
     `,
     styles: [`
            .green{color:#003300 !important;}
            .bold{font-wieght:bold;}
            .thumbnail{min-height:210px;}
            .pad-left{margin-left:10px;}
     `]
})

export class EventThumbnailComponent {
    @Input()  event: IEvent;
    getStartTimeClass() {
       if (this.event && this.event.time === '8:00 am') {
       return ['green', 'bold'];
       }
    }
    getDateStyle() {
        if (this.event && this.event.time === '8:00 am') {
            return {color: 'red', 'font-wight': 'bold'};
        }
        if (this.event && this.event.time === '9:00 am') {
            return {color: 'green', 'font-wight': 'bold'};
        }
        return {color: 'blue', 'font-wight': 'bold'};
    }
}
