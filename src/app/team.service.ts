import { Injectable } from '@angular/core';
import { Team } from './team';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(
    private http: HttpClient
  ) { }

  private teamsURL = 'https://jsfootball-api.azurewebsites.net/api/teams';

  getHeroes(): Observable<Team[]> {
    return this.http.get<Team[]>(this.teamsURL)
  }
}
