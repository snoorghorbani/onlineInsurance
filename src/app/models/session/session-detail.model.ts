export class SessionDetailModel {
    FromDate: string;
    ToDate: string;
    ConnectionDuration: number;
    IpAddress: string;
    MacAddress: string;
    UploadQuotaUsage: number;
    DownloadQuotaUsage: number;
    TotalQuotaUsage: number;
    TerminateCause: string;
 
    constructor({
        FromDate,
        ToDate,
        ConnectionDuration,
        IpAddress,
        MacAddress,
        UploadQuotaUsage,
        DownloadQuotaUsage,
        TotalQuotaUsage,
        TerminateCause

    }) {
        this.FromDate = FromDate;
        this.ToDate = ToDate;
        this.ConnectionDuration = ConnectionDuration;
        this.IpAddress = IpAddress;
        this.MacAddress = MacAddress;
        this.UploadQuotaUsage = UploadQuotaUsage;
        this.DownloadQuotaUsage = DownloadQuotaUsage;
        this.TotalQuotaUsage = TotalQuotaUsage;
        this.TerminateCause = TerminateCause;

    }
}