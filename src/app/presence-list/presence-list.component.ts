import { Component, OnInit } from '@angular/core';
import { PresenceService } from '../presence.service';

@Component({
  selector: 'app-presence-list',
  templateUrl: './presence-list.component.html',
  styleUrls: ['./presence-list.component.css']
})
export class PresenceListComponent implements OnInit {
  items;

  constructor(
    private presenceService: PresenceService,
  ) {
    this.items = this.presenceService.getItems();
   }

  ngOnInit() {
  }

}