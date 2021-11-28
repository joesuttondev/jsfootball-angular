import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }

  @Input() team?: Team;
  @Input() headerOnly: boolean = false;

  ngOnInit(): void {
  }

}
