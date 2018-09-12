import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ReportConfigurationService } from "./report-configuration.service";
import { ReportModuleConfig } from "../report.config";
import { map } from "rxjs/operators";

const httpOptions = {
	headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
	providedIn: "root"
})
export class ReportService {
	config: ReportModuleConfig;
	constructor(private http: HttpClient, private configurationService: ReportConfigurationService) {
		this.configurationService.config$.subscribe(config => (this.config = config));
	}

	getAgentSalesReport(filter: any): Observable<any> {
		var apiUrl = `${this.config.env.server}/Report/GetSalesReport`;
		return this.http.post(apiUrl, filter, httpOptions).pipe(map((res: any) => res.Result.Items));
	}

	getInsuranceCompanies(): Observable<any> {
		var apiUrl = `${this.config.env.server}/Policy/GetInsuranceCompanies`;
		return this.http.get<any>(apiUrl).pipe(map(res => res.Result));
	}

	getAgents(): Observable<any> {
		var apiUrl = `${this.config.env.server}/Policy/GetAgents`;
		return this.http.get<any>(apiUrl).pipe(map(res => res.Result));
	}
}
