import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { FixturesComponent } from './fixtures/fixtures.component';
import { LeagueComponent } from './league/league.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: 'teams', component: TeamsComponent },
  { path: 'fixtures', component: FixturesComponent },
  { path: 'table', component: LeagueComponent },
  { path: 'team/:id', component: TeamComponent },
  { path: '', redirectTo: '/teams', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
