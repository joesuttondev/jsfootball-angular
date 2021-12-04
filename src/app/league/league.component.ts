import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LeagueService } from '../league.service';
import { LeaguePosition } from '../leaguePosition';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {

  constructor(private leagueService: LeagueService) { }

  ngOnInit(): void {
    this.leagueService.getLeaguePositions().subscribe(positions => this.positions = positions);
  }

  public positions: LeaguePosition[];

}
