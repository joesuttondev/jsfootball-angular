import { NgModule, LOCALE_ID  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule}  from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TeamComponent } from './team/team.component';
import { MatIconModule } from '@angular/material/icon';
import { FixturesComponent } from './fixtures/fixtures.component';
import { MaterialCalendarModule } from  'material-calendar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    TeamComponent,
    FixturesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MaterialCalendarModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'en-GB' } // <-- add this line (depending on your location)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
