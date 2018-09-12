export class SalesReportFilter {
	InsuranceCompanyId: number;
	AgentId: number;
	DateRange: DateRange;
	PagingInfo: PagingInfo;

	constructor() {
		this.DateRange = new DateRange();
		this.PagingInfo = new PagingInfo();
	}
}

export class DateRange {
	From: Date;
	To: Date;
}

export class PagingInfo {
	PageNo: number;
	PageSize: number;
}
