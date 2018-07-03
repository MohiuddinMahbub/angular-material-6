import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '../common/material/material.module';


@Component({
  selector: 'app-sidnav',
  templateUrl: './sidnav.component.html',
  styleUrls: ['./sidnav.component.css']
})
export class SidnavComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  } 

  constructor() { }

  ngOnInit() {
  }
}
