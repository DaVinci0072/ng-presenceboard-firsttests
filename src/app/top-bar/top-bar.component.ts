import { Component, OnInit } from '@angular/core';

import { menuitems } from './menuitems.mock';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  menuitems: any[] = menuitems;
  isCollapsed = false;
  constructor() { }

  ngOnInit() {
  }

  toggleMenu(){
    this.isCollapsed = !this.isCollapsed;
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/