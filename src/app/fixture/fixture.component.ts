import { Component, OnInit, Input } from '@angular/core';
import { Fixture } from '../fixture';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css'],
})
export class FixtureComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() fixture: Fixture;

}
