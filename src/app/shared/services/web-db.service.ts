import { Injectable } from '@angular/core';

/*Common files*/
import { Globals } from '../../common/globals';
import { SOURCE, DESTINATION, CCY_CODES } from '../../common/constants';
import { ACTION_TYPE } from '../../common/action-type';
import { CONTENT_TYPE } from '../../common/content-type';

import {ServerService} from '../../service/server.service';
import { DexieService } from './dexie.service';

@Injectable({
  providedIn: 'root'
})
export class WebDbService {

  constructor(
		private globals: Globals,
		private serverService: ServerService,
		private dexieService: DexieService) { }

	getRecipientsServer(){
		let jsonString = {
			header: {
				userId: 100000,
				userName: null,
				source: SOURCE,
				actionType: ACTION_TYPE.ACTION_TYPE_SELECT_BEN_TXN_SUMMARY,
				contentType: CONTENT_TYPE.CONTENT_TYPE_TRANSACTION,
				destination: DESTINATION,
				secretId: this.globals.guid()
			},
			payload: {
				customerId: 1181
			}
		}
		
		this.serverService.dispatcher(jsonString).subscribe(
		   data => {
				
				console.log(data.payload[1].payload);
		   }/*,
		   error => {
				this.logger.error(error);
		   }*/
		);
  }
}
