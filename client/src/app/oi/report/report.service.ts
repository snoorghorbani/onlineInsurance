import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
	headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
	providedIn: "root"
})
export class ReportService {
	constructor(private http: HttpClient) {}

	getAgentSalesReport(filter: any): Observable<any> {
		var apiUrl = "http://185.208.174.92:2000/Report/GetSalesReport";
		debugger;
		return this.http.post(apiUrl, filter, httpOptions);
	}

	getInsuranceCompanies(): Observable<any> {
		var apiUrl = "http://185.208.174.92:2000/Policy/GetInsuranceCompanies";
		return this.http.get<any>(apiUrl);
	}

	getAgents(): Observable<any> {
		var apiUrl = "http://185.208.174.92:2000/Policy/GetAgents";
		return this.http.get<any>(apiUrl);
	}
}
