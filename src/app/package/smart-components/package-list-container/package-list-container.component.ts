import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import * as FeatureReducer from '../../reducers';
import { responseStatusTypes } from '@soushians/shared';

import { PackageListModel as model } from "app/models/package";
//import { FeatureState, getMyLoadedPackages, getMyPackageDataStatus } from '../../reducers'
import { FetchPackageList } from "../../actions";

@Component({
  selector: 'package-list-container',
  template: `
    <package-list
      [data]='data$'
      [status]='status$'
    ></package-list>
  `
})
export class PackageListContainerComponent implements OnInit {
  data$: Observable<model.Response>;
  status$: Observable<responseStatusTypes>;

  constructor(
    private store: Store<FeatureReducer.FeatureState>,
  ) {
    debugger
    this.data$ = this.store.select(FeatureReducer.getPackageList);
    this.status$ = this.store.select(FeatureReducer.getPackageListStatus);
  }

  ngOnInit() {
    debugger
    this.store.dispatch(new FetchPackageList());
  }

}