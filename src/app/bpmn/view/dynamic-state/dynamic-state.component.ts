import {
	Component,
	OnInit,
	Input,
	AfterViewInit,
	ComponentFactoryResolver,
	ViewChild,
	ViewContainerRef,
	ReflectiveInjector,
	OnDestroy,
	Output,
	EventEmitter
} from "@angular/core";
import { StartEventComponent } from "../start-event";
import {
	MoodleTypes,
	GatewayModel,
	EventModel,
	TaskModel,
	BpmnElement,
	TaskTypes,
	EventTypes,
	GatewayTypes
} from "../../models";
import { NotificationTaskComponent } from "../notification-task";
import { FormTaskComponent } from "../form-task";
import { SubmitTaskComponent } from "../submit-task";
import { NavigateTaskComponent } from "../navigate-task";
import { ExclusiveGatewayComponent } from "../exclusive-gateway";

@Component({
	selector: "dynamic-state",
	templateUrl: "./dynamic-state.component.html",
	styleUrls: [ "./dynamic-state.component.scss" ],
	entryComponents: [
		StartEventComponent,
		NotificationTaskComponent,
		FormTaskComponent,
		SubmitTaskComponent,
		NavigateTaskComponent,
		ExclusiveGatewayComponent
	]
})
export class DynamicStateComponent implements AfterViewInit {
	@Output() done = new EventEmitter();
	typeMapToDiagram = {
		[EventTypes.START]: StartEventComponent,
		[GatewayTypes.EXCLUSIVE]: ExclusiveGatewayComponent,
		[TaskTypes.NOTIFICATION]: NotificationTaskComponent,
		[TaskTypes.FORM]: FormTaskComponent,
		[TaskTypes.SUBMIT]: SubmitTaskComponent,
		[TaskTypes.NAVIGATE]: NavigateTaskComponent
	};
	@ViewChild("DC", { read: ViewContainerRef })
	dynamicComponentContainer: ViewContainerRef;
	currentComponent: any = null;
	@Input()
	set State(data: BpmnElement) {
		if (!data || Object.keys(data).length == 0) return;
		if (!(data.Properties.Type in this.typeMapToDiagram)) {
			if (this.currentComponent) this.currentComponent.destroy();
			return;
		}
		let _component = this.typeMapToDiagram[data.Properties.Type];
		let inputProviders = [ { provide: "State", useValue: data } ];
		let resolvedInputs = ReflectiveInjector.resolve(inputProviders);

		let injector = ReflectiveInjector.fromResolvedProviders(
			resolvedInputs,
			this.dynamicComponentContainer.parentInjector
		);
		let factory = this.resolver.resolveComponentFactory(_component);
		let component = factory.create(injector);
		if ((<any>component.instance).done) {
			(<any>component.instance).done.subscribe(payload => {
				if (Object.keys(payload).length == 0) return;
				this.done.emit(payload);
			});
		}

		this.dynamicComponentContainer.insert(component.hostView);

		if (this.currentComponent) {
			this.currentComponent.destroy();
		}

		this.currentComponent = component;
	}
	constructor(private resolver: ComponentFactoryResolver) {}
	ngAfterViewInit() {}
}
