import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
	// now all components inside the counter module has access to the counter module scope
	declarations: [
		CounterComponent
	],
	exports: [
		CounterComponent
	]
})
export class CounterModule { }
