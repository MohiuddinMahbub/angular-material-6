import {T_BANK} from '../interface/config';

export class TBank implements T_BANK{
	bankId: number;
	bankName: string;
	bankCode: string;


	constructor(
		bankId: number,
		bankName: string,
		bankCode: string
		){

		this.bankId = bankId;
		this.bankName = bankName;
		this.bankCode = bankCode;	

	}
}
