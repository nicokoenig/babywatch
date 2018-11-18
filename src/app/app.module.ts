import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import de from "@angular/common/locales/de";
import { registerLocaleData } from "@angular/common";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { TimelineComponent } from "./timeline/timeline.component";
import { SettingsComponent } from "./settings/settings.component";

import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule
} from "@angular/material";

registerLocaleData(de);

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
    MatListModule,
    MatCardModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "de-de" }],
  bootstrap: [AppComponent]
})
export class AppModule {}
