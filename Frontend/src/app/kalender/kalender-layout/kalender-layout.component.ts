import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';


@Component({
  selector: 'app-kalender-layout',
  imports: [
    NgForOf,
    NgIf

  ],
  templateUrl: './kalender-layout.component.html',
  standalone: true,
  styleUrl: './kalender-layout.component.css'
})

export class KalenderLayoutComponent {
  daysOfWeek = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];

  createEvent() {
    alert('Neues Event erstellen');
  }
}
