import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';

/* import { HeroComponent } from './heroes/components/hero/hero.component';
import { ListComponent } from './heroes/components/list/list.component'; */

@NgModule({
	declarations: [
		AppComponent,
		// now these components are encapsulated in a module
		/* CounterComponent,
			HeroComponent,
			ListComponent
		*/
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		CounterModule,
		HeroesModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
