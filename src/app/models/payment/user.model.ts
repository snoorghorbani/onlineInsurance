export class UserModel {
    Username: string;

    constructor(params: UserModel) {
        Object.keys(params).forEach(key => this[key] = params[key])
    }
}