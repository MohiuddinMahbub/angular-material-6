import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
	foreignAmount: number;
	localAmount: number;
	currency: string;
	
	/*Global variables*/
	buyRate: number;
	conversionRate: number;
	currencyConversionIdMobile: number;
	currencyConversionVerMobile: number;
	amountBDT: number;
	amountLocal: number;
	remittance: number;
	seblFee: number;
	currencyCode: string;

	/*Web database*/
	webDb: string;

	feesMap : Map<number, number> = new Map<number, number>();

	guid() {
		return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
		this.s4() + '-' + this.s4() + this.s4() + this.s4();
	}

	s4() {
		return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	}
	
	getMap () {
		return this.feesMap;
	}

	calcRegularFee(amount) {

		let regFee = 0.0;
		let feesMap = this.getMap();
		
		feesMap.forEach((value: number, key: number) => {
			//console.log(key, value);

			if( key >= amount ){
				regFee = value;
				return regFee;
			}
			else if(amount > key)  {
			  regFee = value + (Math.ceil((amount - key)/100000.0)*7.00);
			}
		});

		return regFee;
	}
}
