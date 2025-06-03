import { Component } from '@angular/core';
import {DUMMY_EVENTS, EventData} from './Dummy-event';
import {NgForOf, NgIf} from '@angular/common';
import { Router } from '@angular/router';
import {EditEventComponent} from '../kalender/edit-event/edit-event.component';

@Component({
  selector: 'app-events',
  imports: [
    NgForOf,
    EditEventComponent,
    NgIf
  ],
  templateUrl: './events.component.html',
  standalone: true,
  styleUrl: './events.component.css'
})

export class EventsComponent {
  events: EventData[] = DUMMY_EVENTS;

  selectedEvent: EventData | null = null;
  showEditEventForm = false;

  openEditEvent(event: EventData) {
    this.selectedEvent = event;
    this.showEditEventForm = true;
  }

  closeEditEvent() {
    this.selectedEvent = null;
    this.showEditEventForm = false;
  }
  onEventSaved(updatedEvent: EventData) {
    // Da wir per Referenz arbeiten, ist das Event im Array bereits aktualisiert.
    console.log('Event gespeichert:', updatedEvent);
    // Optional: Hier könntest du z.B. noch eine Bestätigung anzeigen.
  }
}

