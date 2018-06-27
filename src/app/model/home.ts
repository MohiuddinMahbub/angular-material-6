export class Home {
	constructor(
		public local: number,
		public foreign: number,
		
		public  currencyConversionId: number,
		public  currencyConversionVer: number,

		public  currencyConversionIdMobile: number,
		public  currencyConversionVerMobile: number,
		
		public  companyId: number,
		public  ccyId: number,
		public  createdById: number,
		public  updatedById: number,
		public  userModKey: number,
		
		public  createdBy: number,
		public  updatedBy: number,
		
		public  fromCurrency: string,
		public  toCurrency: string,
		public  sellRate: string,
		public  buyRate: string,
		public  ccyKey: string,
		public  ccyName: string,
		
		public  createdOn: Date,
		public  updatedOn: Date,
	) {  }
}
