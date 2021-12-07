import {
  Component,
  HostBinding,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { FixtureService } from '../fixture.service';
import { Fixture } from '../fixture';
import { MatRadioChange } from '@angular/material/radio';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css'],
})
export class FixturesComponent implements OnInit {
  @Input() teamID: number | undefined;

  constructor(private fixtureService: FixtureService) {}
  ngOnInit(): void {
    console.log(this.teamID);

    if (this.teamID != null && this.teamID > 0) {
      this.fixtureService
        .getTeamFixtures(this.teamID)
        .subscribe((f: Fixture[]) => (this.fixtures = f));
    } else {
      this.fixtureService
        .getFixtures()
        .subscribe((f: Fixture[]) => (this.fixtures = f));
    }
  }

  onFixturesClicked() {
    console.log('Fixtures clicked');
    if (this.teamID != null && this.teamID > 0) {
      this.fixtureService
        .getTeamFixtures(this.teamID)
        .subscribe((f: Fixture[]) => (this.fixtures = f));
    } else {
      this.fixtureService
        .getFixtures()
        .subscribe((f: Fixture[]) => (this.fixtures = f));
    }
  }

  onResultsClicked() {
    console.log('Results clicked');
    if (this.teamID != null && this.teamID > 0) {
      this.fixtureService
        .getTeamResults(this.teamID)
        .subscribe((f: Fixture[]) => (this.fixtures = f));
    } else {
      this.fixtureService
        .getResults()
        .subscribe((f: Fixture[]) => (this.fixtures = f));
    }
  }

  onTypeChanged(event: MatRadioChange) {
    console.log(event);

    switch (event.value) {
      case '1': {
        console.log('getting fixtures');
        if (this.teamID != null && this.teamID > 0) {
          this.fixtureService
            .getTeamFixtures(this.teamID)
            .subscribe((f: Fixture[]) => (this.fixtures = f));
        } else {
          this.fixtureService
            .getFixtures()
            .subscribe((f: Fixture[]) => (this.fixtures = f));
        }
        break;
      }
      case '2': {
        console.log('getting results');
        if (this.teamID != null && this.teamID > 0) {
          this.fixtureService
            .getTeamResults(this.teamID)
            .subscribe((f: Fixture[]) => (this.fixtures = f));
        } else {
          this.fixtureService
            .getResults()
            .subscribe((f: Fixture[]) => (this.fixtures = f));
        }
        break;
      }
      default: {
        console.log('getting nothing');
        this.fixtures = [];
      }
    }

    console.log(this.fixtures);
  }

  public fixtures: Fixture[];
}
