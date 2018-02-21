import { Component, OnInit, Inject } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
// import { MatSnackBar } from '@angular/material';

import { FeatureState } from "../../reducers";
import { ActivatedRoute } from "@angular/router";

@Component({
	template: `
          <router-outlet></router-outlet>
        `,
	styleUrls: [ "./agent-module-container.component.scss" ]
})
export class AgentContainerComponent implements OnInit {
	constructor(private route: ActivatedRoute, private store: Store<FeatureState>) {}
	ngOnInit() {}
}
