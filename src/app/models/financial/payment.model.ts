export class PaymentModel {
    Id: string;
    Amount: number;
    Time: Date = new Date();
    Description: string;
    constructor(params?: Request) {
        params && Object.keys(params).forEach(key => {
            if (params[key] != undefined)
                this[key] = params[key];
        });
    }
}
