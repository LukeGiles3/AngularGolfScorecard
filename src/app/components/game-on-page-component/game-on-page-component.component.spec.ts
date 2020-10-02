import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOnPageComponentComponent } from './game-on-page-component.component';

describe('GameOnPageComponentComponent', () => {
  let component: GameOnPageComponentComponent;
  let fixture: ComponentFixture<GameOnPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameOnPageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameOnPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
