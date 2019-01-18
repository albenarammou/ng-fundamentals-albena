import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateSessionComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver,
    SessionListComponent,
    DurationPipe
} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { JQ_TOKEN, 
  ToastrService, 
  CollapsableWellComponent, 
  SimpleModalComponent, 
  ModalTriggerDirective } from './common/index';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';

let jQuery = window['$'];

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsableWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    DurationPipe
  ],
  imports: [BrowserModule,
            FormsModule,
            ReactiveFormsModule,
            RouterModule.forRoot(appRoutes)],
  providers: [EventService,
              ToastrService,
              {provide: JQ_TOKEN, useValue: jQuery},
              EventRouteActivator,
              EventListResolver,
              AuthService,
              {
               provide: 'canDeactivateCreateEvent',
               useValue: checkDirtyState
              }
              ],
  bootstrap: [EventsAppComponent]
})

export class AppModule { }
export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}
