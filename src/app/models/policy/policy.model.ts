export class PolicytModel {
    Id: string;
    Type: 'ثالث' | 'بدنه';
    Status: 'WaitingForPaymnet' | 'Deliverd';
    PaymentAmount: number;
    ImageOfPolicy: string;
    StartDate: Date = new Date();
    ExpireDate: Date = new Date();
    CoverageLevel: number;
    Description: string;
    constructor(params?: Request) {
        params && Object.keys(params).forEach(key => {
            if (params[key] != undefined)
                this[key] = params[key];
        });
    }
}
