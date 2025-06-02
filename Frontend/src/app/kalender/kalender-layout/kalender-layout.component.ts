import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {CreatEventComponent} from '../creat-event/creat-event.component';
import { DUMMY_EVENTS, EventData } from '../../events/Dummy-event';


@Component({
  selector: 'app-kalender-layout',
  imports: [
    NgForOf,
    NgIf,
    CreatEventComponent
  ],
  templateUrl: './kalender-layout.component.html',
  standalone: true,
  styleUrl: './kalender-layout.component.css'
})

export class KalenderLayoutComponent {
  showCreateEventForm = false;

  currentWeekDates: string[] = [];
  daysOfWeek = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
  referenceDate = new Date();

  events: EventData[] = DUMMY_EVENTS;

  ngOnInit() {
    this.generateCurrentWeek();
  }
  //Generiert mit ChatGPT
  generateCurrentWeek() {
    const firstDayOfWeek = new Date(this.referenceDate);
    const dayOfWeek = (this.referenceDate.getDay() + 6) % 7; // Montag = 0
    firstDayOfWeek.setDate(this.referenceDate.getDate() - dayOfWeek);

    this.currentWeekDates = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(firstDayOfWeek);
      date.setDate(firstDayOfWeek.getDate() + i);
      const day = this.daysOfWeek[i];
      const dateNum = date.getDate().toString().padStart(2, '0');
      return `${day} ${dateNum}`;
    });
  }


  previousWeek() {
    this.referenceDate.setDate(this.referenceDate.getDate() - 7);
    this.generateCurrentWeek();
  }

  nextWeek() {
    this.referenceDate.setDate(this.referenceDate.getDate() + 7);
    this.generateCurrentWeek();
  }

  createEvent() {
    this.showCreateEventForm = !this.showCreateEventForm;
  }

  getEventsForDate(dateLabel: string): EventData[] {
    const dayNumber = Number(dateLabel.split(' ')[1]);

    return this.events.filter(event => {
      const eventDay = new Date(event.datum).getDate();
      return eventDay === dayNumber;
    });
  }
}
