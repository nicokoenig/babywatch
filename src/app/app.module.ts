import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule
} from "@angular/material";

import { TimelineComponent } from "./timeline/timeline.component";
import { SettingsComponent } from "./settings/settings.component";

@NgModule({
  declarations: [AppComponent, TimelineComponent, SettingsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
