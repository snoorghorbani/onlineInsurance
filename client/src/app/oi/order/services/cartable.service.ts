import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs";
import { share, map } from "rxjs/operators";

import { FormSchemaModel, FieldConfig } from "@soushians/form";

import { FieldModel } from "../models/field.model";
import { OrderFormModel } from "../models";

@Injectable({
	providedIn: "root"
})
export class CartableService {
	constructor(private http: HttpClient) {}

	getReadonlyField(orderForm$: Observable<OrderFormModel>): Observable<FieldModel[]> {
		return orderForm$.map(orderForm => {
			const fields: FieldModel[] = [];
			Object.keys(orderForm).forEach(key => {
				if (orderForm[key].Status == 2) fields.push(orderForm[key]);
			});
			fields.forEach(item => {
				if (item.Options != null) {
					const selectedOption = item.Options.find(option => option.Value == item.Value);
					if (selectedOption) item.Value = selectedOption.DisplayValue || selectedOption.DisplayName;
					if (!selectedOption) debugger;
				}
			});
			return fields;
		});
	}
	getEditableField(orderForm$: Observable<OrderFormModel>): Observable<FieldModel[]> {
		return orderForm$.map(orderForm => {
			const fields = [];
			Object.keys(orderForm).forEach(key => {
				if ([ 3, 4 ].includes(orderForm[key].Status)) fields.push(orderForm[key]);
			});
			return fields;
		});
	}
	getEditableFieldSchema(fields$: Observable<FieldModel[]>): Observable<FormSchemaModel> {
		return fields$.map(fields => {
			var schema = new FormSchemaModel();
			schema.init();
			schema.form.name = "test";
			schema.form.fields = fields.map(field => {
				var fieldSchema = new FieldConfig("control");
				fieldSchema.name = field.Name;
				fieldSchema.title = field.Label;
				fieldSchema.inputType = this.getInputType(field);
				fieldSchema.subtype = this.getInputType(field);
				fieldSchema.width = 3;
				// fieldSchema.inputType = "text";
				if (field.Options) {
					fieldSchema.options = field.Options.map(option => {
						return { key: option.DisplayValue, value: option.Value };
					});
				}
				fieldSchema.value = field.DisplayValue || field.Value;
				return fieldSchema;
			});
			return schema;
		});
	}
	getInputType(field: FieldModel): any {
		if (field.Options) return "select";
		if (field.Value === false || field.Value === true) return "checkbox";

		return "text";
	}
}
