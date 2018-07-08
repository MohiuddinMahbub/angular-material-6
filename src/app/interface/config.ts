export interface Config {
	textfile: string;
}


export interface T_BANK {
	//id?: number; // Primary key. Optional (autoincremented)
	bankId: number,
	bankName: string,
	bankCode: string
}

export interface T_BANK_BRANCH {
	//id?: number; // Primary key. Optional (autoincremented)
	branchId: number,
	bankId: number,
	districtId: number,
	branchName: string
}

export interface T_DISTRICT {
	//id?: number; // Primary key. Optional (autoincremented)
	districtId: number,
	districtName: string
}

export interface T_RECIPIENT {
	//id?: number; // Primary key. Optional (autoincremented)
	beneficiaryId: number,
	beneficiaryVer: number,
	beneficiaryName: string,
	beneficiaryAccountNo: string,
	benificiaryPhone: string,
	custBenId: number,
	custBenVer: number,
	relation: string,
	outletBankId: number,
	outletBranchId: number,
	outletDistrictId: number,
	beneficiaryBank: string,
	beneficiaryBankBranch: string,
	distName: string,
	totalTxn: string,
	amountInLocalCurrency: string
}