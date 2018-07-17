import { OnInit, ComponentRef, ComponentFactoryResolver, ViewContainerRef, Directive, Input } from "@angular/core";
import { FieldModel } from "../models/field.model";
import { FieldInputComponent } from "../field-input/field-input.component";
import { FieldSelectComponent } from "../field-select/field-select.component";
import { FieldDatepickerComponent } from "../field-datepicker/field-datepicker.component";
import { CartableService } from "../services/cartable.service";

@Directive({
	selector: "[orderField]"
})
export class DynamicOrderFieldDirective implements OnInit {
	@Input() formGroup;
	@Input("orderField")
	set item(item: FieldModel) {
		if (!item) return;
		this._resolve_correct_component_base_on_widget_type(item);
	}
	component: ComponentRef<any>;
	mapTypeToComponent: any;
	constructor(
		private resolver: ComponentFactoryResolver,
		private container: ViewContainerRef,
		private cartableService: CartableService
	) {
		this.mapTypeToComponent = {
			text: FieldInputComponent,
			select: FieldSelectComponent,
			date: FieldDatepickerComponent
		};
	}
	ngOnInit() {}
	_resolve_correct_component_base_on_widget_type(item: FieldModel) {
		debugger;
		const type = this._select_type(item);
		if (!this.mapTypeToComponent[type]) {
			const supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
			throw new Error(
				`Trying to use an unsupported type (${type}).
		  		 Supported types: ${supportedTypes}`
			);
		}
		const component = this.resolver.resolveComponentFactory<any>(this.mapTypeToComponent[type]);
		this.component = this.container.createComponent(component);
		/**
		 * bind inputs
		 */
		this.component.instance.formGroup = this.formGroup;
		this.component.instance.placeholder = item.Label;
		this.component.instance.controlName = item.Name;
		this.component.instance.description = item.Description;
		this.component.instance.hint = item.Description;
		this.component.instance.tooltip = item.Description;
		this.component.instance.appearance = "fill";

		if (type == "select") {
			this.component.instance.options = item.Options;
		}
	}
	_select_type(item: FieldModel): string {
		return this.cartableService.getInputType(item);
	}
}
