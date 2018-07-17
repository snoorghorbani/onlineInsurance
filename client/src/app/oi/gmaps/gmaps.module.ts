import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GoogleMapsComponent } from "./google-maps/google-maps.component";

@NgModule({
	imports: [ CommonModule ],
	exports: [ GoogleMapsComponent ],
	declarations: [ GoogleMapsComponent ]
})
export class GmapsModule {}
