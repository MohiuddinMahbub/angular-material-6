import { Injectable } from '@angular/core';

/*Common files*/
import { Globals } from '../../common/globals';
import { SOURCE, DESTINATION, CCY_CODES } from '../../common/constants';
import { ACTION_TYPE } from '../../common/action-type';
import { CONTENT_TYPE } from '../../common/content-type';

import {ServerService} from '../../service/server.service';
import { DexieService } from './dexie.service';

import Dexie from 'dexie';

import {TBank} from '../../model/t-bank';

@Injectable({
  providedIn: 'root'
})
export class WebDbService {

	db: any;
	table: any;

  	constructor(
		private globals: Globals,
		private serverService: ServerService,
		private dexieService: DexieService) {
	}

  	addAll(db, tableName, data){
		
		//console.log(data);

		this.checkIDB();

		if(tableName == 'T_BANK'){
			this.table = this.dexieService.T_BANK;
		}

  		this.table.bulkPut(data)
  		.then(
  			function(lastKey){
  				console.log("Last data added: {}", lastKey);
  			}
  		)
  		.catch(Dexie.BulkError, 
  			function(e){
  				console.error("Some data failed to add: {}", data - e.failures.length + " data was added successfully.");
  			}
  		);
  	};

  	checkIDB(){
	  	
	  	/*// In the following line, you should include the prefixes of implementations you want to test.
		this.db = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
		// DON'T use "var indexedDB = ..." if you're not in a function.
		// Moreover, you may need references to some window.IDB* objects:
		window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction || {READ_WRITE: "readwrite"}; // This line should only be needed if it is needed to support the object's constants for older browsers
		window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
		// (Mozilla has never prefixed these objects, so we don't need window.mozIDB*)
  	*/
  	}
}
