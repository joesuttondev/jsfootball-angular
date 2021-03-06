import { Injectable } from '@angular/core';
import { Fixture, Score, Period } from './fixture';
import { Observable, of, tap, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FixtureService {
  constructor(private http: HttpClient) {}

  private fixturesURL = 'https://jsfootball-api.azurewebsites.net/api/fixtures';

  getFixtures(): Observable<Fixture[]> {
    return this.http.get<Fixture[]>(this.fixturesURL + '?status=SCHEDULED');
  }
  getResults(): Observable<Fixture[]> {
    return this.http.get<Fixture[]>(this.fixturesURL + '?status=FINISHED').pipe(
      map(fixtures => fixtures.sort((a: Fixture, b: Fixture) =>
        (new Date(b.utcDate)).getTime() - (new Date(a.utcDate)).getTime()
      ))
    );
  }

  getTeamFixtures(teamID: number): Observable<Fixture[]> {
    return this.http.get<Fixture[]>(this.fixturesURL + '/team/' + teamID + '?status=SCHEDULED');
  }
  getTeamResults(teamID: number): Observable<Fixture[]> {
    return this.http.get<Fixture[]>(this.fixturesURL + '/team/' + teamID + '?status=FINISHED').pipe(
      map(fixtures => fixtures.sort((a: Fixture, b: Fixture) =>
        (new Date(b.utcDate)).getTime() - (new Date(a.utcDate)).getTime()
      ))
    );
  }

}
