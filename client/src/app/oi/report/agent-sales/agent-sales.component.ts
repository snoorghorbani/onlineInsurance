import { Component, OnInit } from "@angular/core";
import { ReportService } from "../report.service";
import { SalesReportFilter } from "../report.models";

@Component({
	selector: "app-agent-sales",
	templateUrl: "./agent-sales.component.html",
	styleUrls: [ "./agent-sales.component.css" ]
})
export class AgentSalesComponent implements OnInit {
	displayedColumns: string[] = [
		"InsuranceCompany",
		"Customer",
		"Broker",
		"Agent",
		"Description",
		"AmountPaid",
		"AgentCommission",
		"BrokerCommission"
	];

	insuranceCompanies: any[];
	agents: any[];
	dataSource: any[];
	filter: SalesReportFilter = new SalesReportFilter();

	constructor(private reportService: ReportService) {
		this.dataSource = [];
	}

	ngOnInit() {
		this.getInsuranceCompanies();
		this.getAgents();
		this.getAgentSalesReport();
	}

	getInsuranceCompanies(): void {
		this.reportService.getInsuranceCompanies().subscribe(data => (this.insuranceCompanies = data));
	}

	getAgents(): void {
		this.reportService.getAgents().subscribe(data => (this.agents = data));
	}

	getAgentSalesReport(): void {
		this.reportService.getAgentSalesReport(this.filter).subscribe(data => {
			debugger;
			return (this.dataSource = data.Result.Items);
		});
	}
}
