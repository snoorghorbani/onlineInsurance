import { Component, OnInit } from '@angular/core';
import { ReportsConfigurationService } from "app/reports/services";
import { ReportDefinitionModel } from "app/models/reports";
import { Observable } from "rxjs/Observable";

@Component({
  template:`
    <reports-list [reports]="reports"></reports-list>
  ` 
})
export class ReportsListContainerComponent implements OnInit {
  reports :ReportDefinitionModel[] ;

  constructor(
    private reportsConfigurationService: ReportsConfigurationService
  ) { 
    this.reports = this.reportsConfigurationService.config.reports;
  }

  ngOnInit() {
  }

}