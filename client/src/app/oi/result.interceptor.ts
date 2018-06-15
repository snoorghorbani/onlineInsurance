import "rxjs/add/operator/do";
import { Injectable } from "@angular/core";
import { HttpInterceptor } from "@angular/common/http";
import { HttpRequest } from "@angular/common/http";
import { HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { HttpEvent } from "@angular/common/http";
import { HttpResponse } from "@angular/common/http";
import { filter, map } from "rxjs/operators";

import { environment } from "../../environments/environment";

@Injectable()
export class ResultInterceptor implements HttpInterceptor {
	constructor() {}
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		// if (!this.configurationService.config.env.production)
		return next.handle(request).pipe(
			filter((event: HttpEvent<any>) => event instanceof HttpResponse),
			map((event: HttpResponse<any>) => {
				if (!event.url.includes(environment.server)) return event;
				if (event.body == undefined) {
					console.log(`${event.url} don't return any response`);
					return event;
				}
				if ("Result" in event.body) return event;
				else return event.clone({ body: { Result: event.body } });
			})
		);
	}
}
