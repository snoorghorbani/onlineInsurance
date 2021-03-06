import { DiagramModel } from "./diagram.model";

export namespace GetDiagramsApiModel {
	export class Request {
		diagram: string;

		constructor(initValue: GetDiagramsApiModel.Request = {} as GetDiagramsApiModel.Request) {
			Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
		}

		getRequestBody() {
			return {};
		}

		//static get formGroup() {
		// return new FormGroup({
		//   diagram: new FormControl('', [Validators.minLength(8), Validators.required])
		// })
		//}
	}

	export class Response {
		Result: DiagramModel[];
		constructor() {}
	}
}
