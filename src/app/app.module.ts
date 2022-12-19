import { NgModule ,NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{NgxTwitterTimelineModule}from 'ngx-twitter-timeline'
import { AppComponent } from './app.component';

@NgModule({
  schemas:[NO_ERRORS_SCHEMA],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxTwitterTimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
