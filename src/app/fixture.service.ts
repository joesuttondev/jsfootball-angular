import { Injectable } from '@angular/core';
import { Fixture, Score, Period} from './fixture';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FixtureService {

  constructor(
    private http: HttpClient
  ) { }


}
