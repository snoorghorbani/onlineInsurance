import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpRequestBaseModel } from "@soushians/shared";

export class UserActivePackageReportApiResponseModel
	implements HttpRequestBaseModel<UserActivePackageReportApiResponseModel> {
	PackageName: string;
	ExpirationDate: string;
	TotalTimeCredit: number;
	UsedTimeCredit: number;
	TotalQuotaCredit: number;
	UsedQuotaCredit: number;
	MaxUsageInDay: number;
	UseInDay: number;
	ConnectionStatus: "online" | "offline";
	IpAddress: string;
	MacAddress: string;
	ConnectionStartTime: string;
	ConnectionDuration: string;

	constructor({
		PackageName,
		ExpirationDate,
		TotalTimeCredit,
		UsedTimeCredit,
		TotalQuotaCredit,
		UsedQuotaCredit,
		MaxUsageInDay,
		UseInDay,
		ConnectionStatus,
		IpAddress,
		MacAddress,
		ConnectionStartTime,
		ConnectionDuration
	}) {
		this.PackageName = PackageName;
		this.ExpirationDate = ExpirationDate;
		this.TotalTimeCredit = TotalTimeCredit;
		this.UsedTimeCredit = UsedTimeCredit;
		this.TotalQuotaCredit = TotalQuotaCredit;
		this.UsedQuotaCredit = UsedQuotaCredit;
		this.MaxUsageInDay = MaxUsageInDay;
		this.UseInDay = UseInDay;
		this.ConnectionStatus = ConnectionStatus;
		this.IpAddress = IpAddress;
		this.MacAddress = MacAddress;
		this.MacAddress = MacAddress;
		this.ConnectionStartTime = ConnectionStartTime;
		this.ConnectionDuration = ConnectionDuration;
	}

	getRequestBody() {
		return {};
	}
}

// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { HttpRequestBaseModel, NgrxApiCreator } from '@soushians/shared';
// import { packageModuleDefinition } from 'app/package/package.global';
// import { Injectable } from "@angular/core";
// import { PackageService } from "app/package/services/package.service";

// @Injectable()
// export class UserActivePackageReportApiResponseModel implements HttpRequestBaseModel<UserActivePackageReportApiResponseModel>  {
//     actions;
//     constructor(
//         private packageService: PackageService
//     ) {
//         debugger
//         this.actions = api.actions
//     }

//     static new = function (
//         { PackageName, ExpirationDate, TotalTimeCredit, UsedTimeCredit, TotalQuotaCredit, UsedQuotaCredit, MaxUsageInDay, UseInDay, ConnectionStatus, IpAddress, MacAddress, ConnectionStartTime, ConnectionDuration }
//     ) {
//         this.PackageName = PackageName;
//         this.ExpirationDate = ExpirationDate;
//         this.TotalTimeCredit = TotalTimeCredit;
//         this.UsedTimeCredit = UsedTimeCredit;
//         this.TotalQuotaCredit = TotalQuotaCredit;
//         this.UsedQuotaCredit = UsedQuotaCredit;
//         this.MaxUsageInDay = MaxUsageInDay;
//         this.UseInDay = UseInDay;
//         this.ConnectionStatus = ConnectionStatus;
//         this.IpAddress = IpAddress;
//         this.MacAddress = MacAddress;
//         this.MacAddress = MacAddress;
//         this.ConnectionStartTime = ConnectionStartTime;
//         this.ConnectionDuration = ConnectionDuration;
//     }

//     getRequestBody() {
//         return {}
//     }

//     load() {
//         debugger;
//         return this.packageService.getPackage()
//     }
//     canGetPackages() {
//         debugger;
//         return this.packageService.canGetPackages()
//     }
// }
// var api = NgrxApiCreator<UserActivePackageReportApiResponseModel>(UserActivePackageReportApiResponseModel);
// debugger
// packageModuleDefinition.effects.push(api.effects);

// packageModuleDefinition.providers.push(UserActivePackageReportApiResponseModel);
