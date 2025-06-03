import {Component, EventEmitter, Output} from '@angular/core';
import {DUMMY_EVENTS} from '../../events/Dummy-event';
import {FormsModule} from '@angular/forms';
import { PocketBaseService } from '../../services/pocketbase.service';

@Component({
  selector: 'app-creat-event',
  imports: [
    FormsModule
  ],
  templateUrl: './creat-event.component.html',
  standalone: true,
  styleUrl: './creat-event.component.css'
})
export class CreatEventComponent {
  closeForm() {
    this.closed.emit();
  }

  @Output() closed = new EventEmitter<void>();

  typ = '';
  ort = '';
  datum: string = '';
  zeit: string = '';
  beschreibung = '';

  constructor(private pbService: PocketBaseService) {}



  saveEvent() {
    if (this.typ && this.ort && this.datum && this.zeit && this.beschreibung) {

      const event = {
        typ: this.typ,
        ort: this.ort,
        datum: this.datum,
        zeit: this.zeit,
        beschreibung: this.beschreibung,
      };
    } else {
      alert('Bitte alle Felder ausfüllen');
    }
  }
}
