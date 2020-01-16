import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PresenceService {
  items = [];

  addItem(presence) {
    this.items.push(presence);
  }

  clearItems() {
    this.items = [];
    return this.items;
  }

  getItems() {
    return this.items;
  }

  getPresences() {
    return this.http.get('/assets/presences.json');
  }

  constructor(
    private http: HttpClient
    ) { }

}