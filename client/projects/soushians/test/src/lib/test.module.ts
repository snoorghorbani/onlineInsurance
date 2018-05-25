import { NgModule } from "@angular/core";
import { TestComponent } from "./test.component";

import { NgsFormModule } from "@soushians/form";
import { SharedModule } from "@soushians/shared";
import { NgsConfigModule } from "@soushians/config";
// import { SharedModule } from "@soushians/shared";

console.assert(NgsFormModule != null, "NgsFormModule");

@NgModule({
	imports: [ NgsFormModule, SharedModule, NgsConfigModule ],
	declarations: [ TestComponent ],
	exports: [ TestComponent ]
})
export class TestModule {}
