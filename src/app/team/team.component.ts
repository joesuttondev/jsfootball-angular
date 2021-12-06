import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../team';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private teamService: TeamService
    ) { }

  @Input() team: Team | undefined;
  @Input() headerOnly: boolean = false;

  ngOnInit(): void {
    if (this.team == null)
    {
      this.getTeam();
    }
  }

  getTeam(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Navigated ID: ' + id);
    this.teamService.getTeam(id).subscribe(team => this.team = team[0]);
  }
}
