import { Component, OnInit } from "@angular/core";
import { ReportService } from "../services/report.service";
import { SalesReportFilter } from "../report.models";
import { Observable } from "rxjs";

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

	insuranceCompanies$: Observable<any[]>;
	agents$: Observable<any[]>;
	dataSource$: Observable<any[]>;
	filter: SalesReportFilter = new SalesReportFilter();

	constructor(private reportService: ReportService) {}

	ngOnInit() {
		this.getInsuranceCompanies();
		this.getAgents();
		this.getAgentSalesReport();
	}

	getInsuranceCompanies(): void {
		this.insuranceCompanies$ = this.reportService.getInsuranceCompanies();
		this.insuranceCompanies$.subscribe(a => {
			debugger;
		});
	}

	getAgents(): void {
		this.agents$ = this.reportService.getAgents();
		this.agents$.subscribe(a => {
			debugger;
		});
	}

	getAgentSalesReport(): void {
		this.dataSource$ = this.reportService.getAgentSalesReport(this.filter);
	}
}
