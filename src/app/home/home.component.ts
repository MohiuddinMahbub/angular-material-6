/*Angular core libraries*/
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { FormControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import { DomSanitizer  } from '@angular/platform-browser';
/*Interfaces*/
/*import { Config } from '../interface/config';*/

/*Common files*/
import { Globals } from '../common/globals';
import { SOURCE, DESTINATION, CCY_CODES } from '../common/constants';
import { ACTION_TYPE } from '../common/action-type';
import { CONTENT_TYPE } from '../common/content-type';

/*Models*/
import { Home } from '../model/home';
import { FeesNdCharges } from '../model/fees-nd-charges';

/*Service classes*/
import {ServerService} from '../service/server.service';
import { LoggerService } from '../service/logger.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit  {
	
	homeForm: FormGroup;
	ccy_codes = CCY_CODES;

	home: Home; // model home
	fees: FeesNdCharges; // model FeesNdCharges

	sellRate: string;
	selectedCcy: string = 'GBP';

	foreignAmount: number;
	localAmount: number;

	constructor(
		private router: Router,
		private http: HttpClient,
		private globals: Globals,
		private logger: LoggerService,
		private serverService: ServerService,

		private formBuilder: FormBuilder
	) 
	{	
	}
	
	ngOnInit() {

		this.getAll();
		//this.getConversionRate();

		this.homeForm = this.formBuilder.group({
			foreignAmt: ['', Validators.required ],
			ccy_code: 'BDT'
		});
	}

	getAll(){

		let string1 = {
			header: {
				userId: null,
				userName: null,
				source: SOURCE,
				actionType: ACTION_TYPE.ACTION_SELECT_CURRENCY_MOBILE,
				contentType: CONTENT_TYPE.CONTENT_TYPE_CURRENCY,
				destination: DESTINATION,
				secretId: this.globals.guid()
			},
			payload: {}
		}

		let string2 = {
			header: {
				userId: null,
				userName: null,
				source: SOURCE,
				actionType: ACTION_TYPE.ACTION_TYPE_SELECT,
				contentType: CONTENT_TYPE.CONTENT_TYPE_FEES_CHARGES,
				destination: DESTINATION,
				secretId:  this.globals.guid()
			},
			payload: {}
		}


		let args = [];

		args[0] = string1;
		args[1] = string2;
		
		/*this.serverService.biDispatcher(string1, string2).subscribe(*/
		
		this.serverService.multiDispatcher(args).subscribe(
		   results => {
				/*console.log(results);*/
				this.home = results[0].payload[1].payload[0];

				/*let fees: FeesNdCharges = results[1].payload[1].payload;*/
				let fnc = results[1].payload[1].payload;

				this.sellRate = parseFloat(this.home.sellRate).toFixed(2);

				for(let i = 0; i < fnc.length; i++){
					this.globals.feesMap.set(fnc[i].bdtAmount, fnc[i].feeGbp);
				}

				/*this.logger.log(this.globals.calcRegularFee(10000));*/
		   },
		   error => {
				this.logger.error(error);
		   }
		);
	}

	getConversionRate() {
	
		let jsonString = {
			header: {
				userId: null,
				userName: null,
				source: SOURCE,
				actionType: ACTION_TYPE.ACTION_SELECT_CURRENCY_MOBILE,
				contentType: CONTENT_TYPE.CONTENT_TYPE_CURRENCY,
				destination: DESTINATION,
				secretId: this.globals.guid()
			},
			payload: {}
		};

		this.serverService.dispatcher(jsonString).subscribe(
		   data => {
				
				let home: Home = data.payload[1].payload[0];

				this.sellRate = parseFloat(home.sellRate).toFixed(2);

				/*this.logger.log(home.buyRate);*/
		   },
		   error => {
				this.logger.error(error);
		   }
		);
	}

	onChange(value) {

		if (value == 'GBP') {			
			this.selectedCcy = value;
		}
		else{
			this.selectedCcy = value;
		}
	}

	onClick() {
		
/*		this.globals.foreignAmount = this.foreignAmount;
		this.globals.localAmount = this.localAmount;

		this.logger.log(this.globals.foreignAmount);*/

		this.router.navigate(['login']);
	}
}
