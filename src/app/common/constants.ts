
export const SERVER_URL = 'http://10.33.254.209:8080/SEBL-server/jsonRequest';  // URL to server
export const FILE_UPLOAD_URL = 'http://10.33.254.209:8080/SEBL-server/fileUpload';

export const SOURCE = 'SFSL';
export const DESTINATION = 'SEBL-server';

export const COUNTRY = [
	{ countryId: 100017, countryName: 'Bangladesh' }
];

export const CURRENCY = [
	//TODO::HARD currency id
	{ ccyId: 100048, ccyKey: 'GBP', ccyName: "United Kingdom, Pounds" }, 
	{ ccyId: 100014, ccyKey: 'BDT', ccyName: "Bangladesh, Taka" }
];

export const PAYMENT_METHODS = [
	{ id: 1, name: 'To Bank Account' }, 
	{ id: 2, name: 'Cash Pick-up (PIN)' }
];
	
export const PAYMENT_PURPOSES = [
	{ id: 1, name: 'Loan' },
	{ id: 2, name: 'Loan Repayment' },
	{ id: 3, name: 'Family Support' },
	{ id: 4, name: 'Job Salary' },
	{ id: 5, name: 'Education Purpose' },
	{ id: 6, name: 'Medical Purpose' },
	{ id: 7, name: 'Property Purchase' },
	{ id: 8, name: 'Zakath' },
	{ id: 9, name: 'Gift' },
	{ id: 10, name: 'Construction' },
	{ id: 11, name: 'Investment' },
	{ id: 12, name: 'Donation' },
	{ id: 13, name: 'Savings' },
	{ id: 14, name: 'Others' }
];

export class Constants {
}
