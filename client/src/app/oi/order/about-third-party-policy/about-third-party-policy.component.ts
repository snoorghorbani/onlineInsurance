import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState } from '../order.reducers';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
	selector: 'about-third-party-policy',
	templateUrl: './about-third-party-policy.component.html',
	styleUrls: [ './about-third-party-policy.component.css' ]
})
export class AboutThirdPartyPolicyComponent implements OnInit, OnDestroy {
	unsubscribe = new Subject<void>();

	constructor() {}

	ngOnInit() {}
	ngOnDestroy() {
		this.unsubscribe.next();
		this.unsubscribe.complete();
	}
}
