import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {HomeComponent} from "./components/home/home.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {BorderedPageComponent} from "./components/bordered-page/bordered-page.component";
import {ContactMeComponent} from "./components/contact-me/contact-me.component";
import {ResumeComponent} from "./components/resume/resume.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {NgxGoogleAnalyticsModule} from "ngx-google-analytics";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BorderedPageComponent,
    ContactMeComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxGoogleAnalyticsModule.forRoot("UA-105785959-1")
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
