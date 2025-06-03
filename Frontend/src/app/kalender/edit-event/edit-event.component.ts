import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {EventData} from '../../events/Dummy-event';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent {
  @Input() event!: EventData;
  @Output() closed = new EventEmitter<void>();

  closeForm() {
    this.closed.emit();
  }
}
