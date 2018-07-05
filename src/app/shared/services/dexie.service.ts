import { Injectable } from '@angular/core';

import Dexie from 'dexie';

@Injectable({
  providedIn: 'root'
})

export class DexieService extends Dexie{

  constructor() {
  	super('SmartRemit');
  	this.version(1).stores(
	  	{
			T_BANK: "bankId,bankName",
			T_BANK_BRANCH: "branchId,bankId,districtId",
			T_DISTRICT: "districtId,districtName",
			T_RECIPIENT: "beneficiaryId,beneficiaryName"		
	  	}
  	);
  	/*this.on('error', function(err){
  		console.error('DB error err: {}', err);
  	});*/
  }
}
