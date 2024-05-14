import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor() { }

startTime: Date = new Date('2024-03-01T08:00:00');
endTime: Date = new Date('2024-03-01T23:30:00');
intervalMinutes: number= 90;


//Data for testing


  checkTimeInRange(startTime: any, endTime: any): any[] {

    const data: string[] = [];
    for (let time :Date = this.startTime; time <= this.endTime; time.setMinutes(time.getMinutes() + this.intervalMinutes)) {
      const hours = String(time.getHours()).padStart(2, '0');
      const minutes = String(time.getMinutes()).padStart(2, '0');
      const formattedTime = `${hours}:${minutes}`;
      data.push(formattedTime);
    }
    const starttime: Date = new Date(`2000-01-01T${startTime}`);
    const endtime: Date = new Date(`2000-01-01T${endTime}`);
    const available_slots: string[] = [];
    for (let i = 0; i < data.length - 1; i++) {
      const current_time: Date = new Date(`2000-01-01T${data[i]}`);
      const next_time: Date = new Date(`2000-01-01T${data[i + 1]}`);
      if (starttime > current_time && starttime < next_time) {
        available_slots.push(data[i]);
      }
      if (starttime <= current_time && next_time <= endtime) {
        available_slots.push(data[i]);
      }
    }
  
    if (endtime >= new Date(`2000-01-01T${data[data.indexOf(available_slots[available_slots.length - 1]) + 1]}`)) {
      available_slots.push(data[data.indexOf(available_slots[available_slots.length - 1]) + 1]);
    }
    
    
    return available_slots
  }
}
