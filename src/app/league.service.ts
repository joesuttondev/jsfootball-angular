import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LeaguePosition } from './leaguePosition';

@Injectable({
  providedIn: 'root',
})
export class LeagueService {
  constructor(private http: HttpClient) {}

  private leagueURL = 'https://jsfootball-api.azurewebsites.net/api/league';

  getLeaguePositions(): Observable<LeaguePosition[]> {
    return this.http.get<LeaguePosition[]>(this.leagueURL);
  }
}
