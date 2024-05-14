import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ScheduleService } from './schedule.service';

describe('AppComponent', () => {
  // let service: ScheduleService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'schedule-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('schedule-app');
  });

  // it('should return available time slots', () => {
  //   const start = '08:00';
  //   const end = '13:30';
  //   // const intervalMinutes = 90;
  //   const expectedSlots = ['08:00', '09:30', '11:00', '12:30'];
  //   const result = service.checkTimeInRange(start, end);
  //   expect(result).toEqual(expectedSlots);
  // })
});
