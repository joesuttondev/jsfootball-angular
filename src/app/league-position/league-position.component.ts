import { Component, OnInit, Input } from '@angular/core';
import { LeaguePosition } from '../leaguePosition';

@Component({
  selector: 'app-league-position',
  templateUrl: './league-position.component.html',
  styleUrls: ['./league-position.component.css']
})
export class LeaguePositionComponent implements OnInit {

  constructor() { }

  @Input() leaguePosition?: LeaguePosition;

  ngOnInit(): void {
  }

}
