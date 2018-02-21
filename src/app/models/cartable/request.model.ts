export class RequestModel {
    Message: string;
    Name: string;
    Request?: {
        Coveragelevel: number;
        NoDamagedYears: number;
        InsuranceTerm: number;
        DueDate: Date;
        PaidMoney: number;
        insuranceCompany: string;
        CarProductionYear: number;
        Marketing: number;
        FinalPrice: number;
        History: any[]
    };
    constructor(params?: Request) {
        this.Request = {
            Coveragelevel: 1,
            NoDamagedYears: 1,
            InsuranceTerm: 1,
            DueDate: new Date(),
            PaidMoney: 1,
            insuranceCompany: '',
            CarProductionYear: 1,
            Marketing: 1,
            FinalPrice: 1,
            History: []
        };
        params && Object.keys(params).forEach(key => {
            if (params[key] != undefined)
                this[key] = params[key];
        });
    }
}
