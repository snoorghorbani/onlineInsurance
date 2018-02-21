import { Observable } from 'rxjs/Observable';

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ReportDefinitionModel } from "app/models/reports";


@Component({
  selector: 'reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss']
})
export class ReportListComponent implements OnInit {

  @Input() reports: ReportDefinitionModel[];

  constructor() { }

  submit() {
  }

  ngOnInit() { }

}