import { Injectable } from '@angular/core';

import {
	T_BANK,
	T_BANK_BRANCH,
	T_DISTRICT,
	T_RECIPIENT
} from '../../interface/config';

import { TBank } from '../../model/t-bank';

import Dexie from 'dexie';

@Injectable({
	providedIn: 'root'
})

export class DexieService extends Dexie{

	T_BANK: Dexie.Table<T_BANK, number>; // type of the primary key
	T_BANK_BRANCH: Dexie.Table<T_BANK_BRANCH, number>;
	T_DISTRICT: Dexie.Table<T_DISTRICT, number>;
	T_RECIPIENT: Dexie.Table<T_RECIPIENT, number>;
	
	constructor() {
		super('SmartRemit');
		this.version(1).stores({
				T_BANK: 'bankId, bankName, bankCode',
				T_BANK_BRANCH: 'branchId, bankId, districtId, branchName',
				T_DISTRICT: 'districtId, districtName',
				T_RECIPIENT: 'beneficiaryId, beneficiaryVer, beneficiaryName, beneficiaryAccountNo, benificiaryPhone, custBenId, custBenVer, relation, outletBankId, outletBranchId, outletDistrictId, beneficiaryBank, beneficiaryBankBranch, distName, totalTxn, amountInLocalCurrency',
			}
		);
	}
}
