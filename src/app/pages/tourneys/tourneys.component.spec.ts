import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourneysComponent } from './tourneys.component';

describe('TourneysComponent', () => {
  let component: TourneysComponent;
  let fixture: ComponentFixture<TourneysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [TourneysComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourneysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
