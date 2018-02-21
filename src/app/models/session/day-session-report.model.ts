export class DaySessionReportModel {
    Date: string;
    ConnectionDuration: number;
    UploadQuotaUsage: number;
    DownloadQuotaUsage: number;
    TotalQuotaUsage: number;
    constructor(state: DaySessionReportModel) {
        Object.keys(state).forEach(key => this[key] = state[key]);
    }
}
