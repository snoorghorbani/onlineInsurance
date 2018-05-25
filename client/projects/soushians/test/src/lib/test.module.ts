import { NgModule } from "@angular/core";
import { TestComponent } from "./test.component";

import { NgsFormModule } from "@soushians/form";

@NgModule({
	imports: [ NgsFormModule ],
	declarations: [ TestComponent ],
	exports: [ TestComponent ]
})
export class TestModule {}
