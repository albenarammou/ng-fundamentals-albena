import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared/event.service';
@Component({
    templateUrl: './create-event.component.html',
    styles: [`
    em { float:right; color:#E05C65; padding-left:10px;}
    .error input {background-color: #BC8F8F;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error :ms-input-placeholder { color: #999; }
   `]
})

export class CreateEventComponent  {
    newEvent;
    event: any;
    isDirty = true;
    constructor(private eventService: EventService, private router: Router) {
    }
    saveEvent(formValues) {
        this.eventService.saveEvent(formValues);
        this.isDirty = false;
        this.router.navigate(['/events']);
    }
    cancel() {
         this.router.navigate(['/events']);
    }
}

