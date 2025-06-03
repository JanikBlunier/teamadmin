import {Component, EventEmitter, Output} from '@angular/core';
import {DUMMY_EVENTS} from '../../events/Dummy-event';
import {FormsModule} from '@angular/forms';

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
  @Output() closed = new EventEmitter<void>();

  typ: string = 'Training';
  ort: string = '';
  datum: string = '';
  zeit: string = '';
  beschreibung: string = '';

  closeForm() {
    this.closed.emit();
  }

  saveEvent() {
    if (this.typ && this.ort && this.datum && this.zeit && this.beschreibung) {

      DUMMY_EVENTS.push({
        typ: this.typ,
        ort: this.ort,
        datum: this.datum,
        zeit: this.zeit,
        beschreibung: this.beschreibung
      });
      this.closeForm();
    } else {
      alert('Bitte alle Felder ausfüllen');
    }
  }
}
