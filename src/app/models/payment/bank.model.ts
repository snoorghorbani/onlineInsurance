export class BankModel {
    Id: number;
    Name: string;
    Logo: string;

    constructor({ Id, Name, Logo }) {
        this.Id = Id;
        this.Name = Name;
        this.Logo = Logo;
    }
}