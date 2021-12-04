import { Component, HostBinding, OnInit } from '@angular/core';
import { FixtureService } from '../fixture.service';
import { Fixture } from '../fixture';
import { MatRadioChange } from '@angular/material/radio';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css'],
})
export class FixturesComponent implements OnInit {
  constructor(private fixtureService: FixtureService) {}
  ngOnInit(): void {
    this.fixtureService
      .getFixtures()
      .subscribe((f: Fixture[]) => (this.fixtures = f));
  }

  onTypeChanged(event: MatRadioChange) {
console.log(event);


    switch (event.value) {
      case '1': {
        console.log('getting fixtures');
        this.fixtureService
          .getFixtures()
          .subscribe((f: Fixture[]) => (this.fixtures = f));
          break;
      }
      case '2': {
        console.log('getting results');
        this.fixtureService
          .getResults()
          .subscribe((f: Fixture[]) => (this.fixtures = f));
          break;
      }
      default:
        {
          console.log('getting nothing');
          this.fixtures = [];
        }
    }

    console.log(this.fixtures);
  }

  public fixtures: Fixture[];
}
