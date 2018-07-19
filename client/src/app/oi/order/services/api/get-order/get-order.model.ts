export namespace GetOrderApiModel {
	export class Request {
		Id: string;
		constructor(initValue = {}) {
			Object.keys(initValue).forEach((key) => (this[key] = initValue[key]));
		}

		getRequestBody() {
			return {};
		}
	}

	export class Response<T> {
		Result: T;
		constructor() {}
	}
}
