import { Component, OnInit } from '@angular/core';

import {TBank} from '../../model/t-bank';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

	localStorageData: TBank[];
  constructor() { }

  ngOnInit() {
  }

	getData(){
		this.localStorageData = JSON.parse(localStorage.getItem('T_BANK'));
		//this.localStorageData = JSON.parse(sessionStorage.getItem('T_BANK'));

		console.log("Storage data: {}", this.localStorageData);
	}
}
