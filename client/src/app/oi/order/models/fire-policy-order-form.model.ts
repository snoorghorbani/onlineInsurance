import { FieldModel } from "./field.model";

export class FirePolicyOrderFormModel {
	ProductId: FieldModel;
	Id: FieldModel;
	noemelk: FieldModel;
	tedadvahed: FieldModel;
	noesaze: FieldModel;
	metrazh: FieldModel;
	arzeshlavazem: FieldModel;

	constructor(initValue = {}) {
		Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
	}
}
