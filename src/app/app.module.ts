import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TeamComponent } from './team/team.component';
import {MatIconModule} from '@angular/material/icon';
import { FixturesComponent } from './fixtures/fixtures.component';
import { Route, Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    TeamComponent,
    FixturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    Router,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
