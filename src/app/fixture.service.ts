import { Injectable } from '@angular/core';
import { Fixture, Score, Period } from './fixture';
import { Observable, of } from 'rxjs';
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
    return this.http.get<Fixture[]>(this.fixturesURL + '?status=FINISHED');
  }

  // getFixtures(): Observable<DayC[]> {
  //   return this.http.get<Fixture[]>(this.fixturesURL).pipe(
  //     map((results: Fixture[]) => {
  //       console.log(Number(new Date));
  //       return results.map((fixture: Fixture) => {
  //         return {
  //           date: 1638230400000,
  //           color: 'red',
  //           backgroundColor: 'black',
  //         };
  //       });
  //     })
  //   );
  // }
}
