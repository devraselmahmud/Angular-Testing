import { TestBed } from '@angular/core/testing';

import { ScheduleService } from './schedule.service';

describe('ScheduleService', () => {
  let service: ScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return available time slots', () => {
    const start = '09:33';
    const end = '23:30';
    // const intervalMinutes = 90;
    const expectedSlots = ['09:30', '11:00', '12:30', '14:00', '15:30', '17:00', '18:30', '20:00', '21:30', '23:00'];
    const result = service.checkTimeInRange(start, end);
    expect(result).toEqual(expectedSlots);
  })
});
