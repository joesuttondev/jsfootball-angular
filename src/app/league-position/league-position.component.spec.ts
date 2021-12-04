import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaguePositionComponent } from './league-position.component';

describe('LeaguePositionComponent', () => {
  let component: LeaguePositionComponent;
  let fixture: ComponentFixture<LeaguePositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaguePositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaguePositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
