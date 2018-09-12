import "rxjs/add/operator/do";
import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpErrorResponse } from "@angular/common/http";
import { HttpRequest } from "@angular/common/http";
import { HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { HttpEvent } from "@angular/common/http";
import { HttpResponse } from "@angular/common/http";
import { filter, map } from "rxjs/operators";
import { throwError } from "rxjs";
import { MatSnackBar } from "@angular/material";
// import { environment } from "../../../environments/environment";

@Injectable()
export class ExceptionInterceptor implements HttpInterceptor {
	constructor(private snackBar: MatSnackBar) {}
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next
			.handle(request)
			.map((event: HttpEvent<any>) => {
				if (event instanceof HttpResponse) return event;
			})
			.catch(err => {
				this.snackBar.open(err.error.errorMessage, "", {
					duration: 2000
				});
				return throwError(err);
			});
	}
}
