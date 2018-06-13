import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs";

import { UploadFile, FileSystemFileEntry } from "ngx-file-drop";
import { OrderConfigurationService } from "./order-configuration.service";

@Injectable({
	providedIn: "root"
})
export class FileService {
	constructor(private http: HttpClient, private configurationService: OrderConfigurationService) {}

	AttachFileToOrder(droppedFile: UploadFile): Observable<any> {
		const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
		var zz = fileEntry.file((file: File) => {
			// Here you can access the real file
			console.log(droppedFile.relativePath, file);
			debugger;
			const formData = new FormData();
			formData.append("File", file, file.name);
			formData.append(
				"Model",
				JSON.stringify({
					Topic: "1",
					OrderId: ""
				})
			);
			/**
          // You could upload it like this:
 
          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })
 
          **/
			return this.http
				.post(`${this.configurationService.config.env.server}/order/AttachFileToOrder`, formData, {
					reportProgress: true,
					observe: "events"
				})
				.subscribe(
					data => {
						debugger;
						// Sanitized logo returned from backend
					},
					data => {
						debugger;
						// Sanitized logo returned from backend
					}
				);
		});

		return of({});
		// .map((response: any) => response.Result as OrderType[]);
	}
}
