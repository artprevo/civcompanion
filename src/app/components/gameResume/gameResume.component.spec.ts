import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameResumeComponent } from './gameResume.component';

describe('GameResumeComponent', () => {
  let component: GameResumeComponent;
  let fixture: ComponentFixture<GameResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [GameResumeComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
