import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SedsMastheadModule } from './components/seds-masthead/seds-masthead.module';
import { SedsButtonShowcaseComponent } from './pages/seds-button-showcase/seds-button-showcase.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    SedsMastheadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
