import { Component } from '@angular/core';
import {DUMMY_EVENTS, EventData} from './Dummy-event';
import {NgForOf} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  imports: [
    NgForOf
  ],
  templateUrl: './events.component.html',
  standalone: true,
  styleUrl: './events.component.css'
})

export class EventsComponent {
  events: EventData[] = DUMMY_EVENTS;

}

