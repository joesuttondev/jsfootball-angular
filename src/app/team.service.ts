import { Injectable } from '@angular/core';
import { Team } from './team';
import { Observable, of, tap, catchError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  constructor(private http: HttpClient) {}

  private teamsURL = 'https://jsfootball-api.azurewebsites.net/api/teams';

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.teamsURL);
  }

  getTeam(id: number): Observable<Team[]> {
    const url = `${this.teamsURL}/${id}`;
    console.log(url);
    return this.http.get<Team[]>(url);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
