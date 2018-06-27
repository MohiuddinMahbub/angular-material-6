export class FeesNdCharges {
	constructor(	
		public  feesAndChargeId: number ,
		public  feesAndChargeVar: number,
		public  userModKey: number,

		public  createdById: number,
		public  updatedById: number,

		public regularFee: string,
		public createdBy: string,
		public updatedBy: string,
		
		public  ccCharge: number,
		public  dcCharge: number,
		public  bdtAmount: number,
		public  feeGbp: number,
		public  feeMember: number,
		
		public createdOn: Date,
		public updatedOn: Date,
	){

	}
}
