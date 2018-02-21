import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DaySessionReportModel } from "app/models/session/day-session-report.model";
export class SuccessfulPaymentModel {
    PaymentId: number;
    PackageName: string;
    Price: number;
    VAX: number;
    TAX: number;
    TotalAmount: number;
    IssueDate: Date;
    BankName: string;

    constructor(initValue: SuccessfulPaymentModel) {
        Object.keys(initValue).forEach(key => this[key] = initValue[key])
    }
}