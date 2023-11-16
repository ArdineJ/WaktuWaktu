import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import the FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FeaturesComponent } from './features/features.component';
import { AboutComponent } from './about/about.component';
import { HelpsComponent } from './helps/helps.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TimerComponent } from './features/timer/timer.component';
import { StopwatchComponent } from './features/stopwatch/stopwatch.component';
import { NotesComponent } from './features/notes/notes.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations:[
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    FeaturesComponent,
    AboutComponent,
    HelpsComponent,
    TimerComponent,
    StopwatchComponent,
    NotesComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap:[AppComponent],
})
export class AppModule {}
