import PocketBase from 'pocketbase';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PocketBaseService {
  private pb: PocketBase;

  constructor() {
    this.pb = new PocketBase('http://127.0.0.1:8090'); // lokale URL
  }

  getEvents() {
    return this.pb.collection('events').getFullList({ sort: '-created' });
  }

  createEvent(event: any) {
    return this.pb.collection('events').create(event);
  }
}
