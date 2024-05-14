import { Component, OnInit } from '@angular/core';
import { ScheduleService } from './schedule.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'schedule-app';

  constructor(public scheduleService: ScheduleService) { }



  sample_data = [
    {
        "studentPortfolioId": 53,
        "courseId": 5,
        "sectionId": 31,
        "semesterSessionId": 20241,
        "sectionType": "OTHER",
        "classSchedules": [
            {
                "startTime": "15:06",
                "endTime": "22:50",
                "day": "MONDAY"
            },
            {
                "startTime": "15:06",
                "endTime": "22:50",
                "day": "TUESDAY"
            }
        ]
    },
    // {
    //     "studentPortfolioId": 52,
    //     "courseId": 5,
    //     "sectionId": 31,
    //     "semesterSessionId": 20241,
    //     "sectionType": "OTHER",
    //     "classSchedules": [
    //         {
    //             "startTime": "15:06",
    //             "endTime": "22:50",
    //             "day": "MONDAY"
    //         },
    //         {
    //             "startTime": "15:06",
    //             "endTime": "22:50",
    //             "day": "TUESDAY"
    //         }
    //     ]
    // },
    // {
    //     "studentPortfolioId": 53,
    //     "courseId": 7,
    //     "sectionId": 94,
    //     "semesterSessionId": 20241,
    //     "sectionType": "OTHER",
    //     "classSchedules": [
    //         {
    //             "startTime": "10:06",
    //             "endTime": "16:50",
    //             "day": "SATURDAY"
    //         },
    //         {
    //             "startTime": "10:06",
    //             "endTime": "16:50",
    //             "day": "WEDNESDAY"
    //         }
    //     ]
    // },
    // {
    //     "studentPortfolioId": 41,
    //     "courseId": 7,
    //     "sectionId": 94,
    //     "semesterSessionId": 20241,
    //     "sectionType": "OTHER",
    //     "classSchedules": [
    //         {
    //             "startTime": "10:06",
    //             "endTime": "16:50",
    //             "day": "SATURDAY"
    //         },
    //         {
    //             "startTime": "10:06",
    //             "endTime": "16:50",
    //             "day": "WEDNESDAY"
    //         }
    //     ]
    // },
    // {
    //     "studentPortfolioId": 52,
    //     "courseId": 7,
    //     "sectionId": 94,
    //     "semesterSessionId": 20241,
    //     "sectionType": "OTHER",
    //     "classSchedules": [
    //         {
    //             "startTime": "10:06",
    //             "endTime": "16:50",
    //             "day": "SATURDAY"
    //         },
    //         {
    //             "startTime": "10:06",
    //             "endTime": "16:50",
    //             "day": "WEDNESDAY"
    //         }
    //     ]
    // },
    // {
    //     "studentPortfolioId": 53,
    //     "courseId": 2,
    //     "sectionId": 18,
    //     "semesterSessionId": 20241,
    //     "sectionType": "OTHER",
    //     "classSchedules": [
    //         {
    //             "startTime": "10:06",
    //             "endTime": "18:50",
    //             "day": "MONDAY"
    //         },
    //         {
    //             "startTime": "10:06",
    //             "endTime": "18:50",
    //             "day": "TUESDAY"
    //         }
    //     ]
    // },
    // {
    //     "studentPortfolioId": 41,
    //     "courseId": 2,
    //     "sectionId": 18,
    //     "semesterSessionId": 20241,
    //     "sectionType": "OTHER",
    //     "classSchedules": [
    //         {
    //             "startTime": "10:06",
    //             "endTime": "18:50",
    //             "day": "MONDAY"
    //         },
    //         {
    //             "startTime": "10:06",
    //             "endTime": "18:50",
    //             "day": "TUESDAY"
    //         }
    //     ]
    // },
    // {
    //     "studentPortfolioId": 52,
    //     "courseId": 3,
    //     "sectionId": 101,
    //     "semesterSessionId": 20241,
    //     "sectionType": "LAB",
    //     "classSchedules": []
    // },
    // {
    //     "studentPortfolioId": 53,
    //     "courseId": 3,
    //     "sectionId": 19,
    //     "semesterSessionId": 20241,
    //     "sectionType": "LAB",
    //     "classSchedules": [
    //         {
    //             "startTime": "10:06",
    //             "endTime": "20:50",
    //             "day": "MONDAY"
    //         },
    //         {
    //             "startTime": "10:06",
    //             "endTime": "20:50",
    //             "day": "TUESDAY"
    //         }
    //     ]
    // },
    // {
    //     "studentPortfolioId": 41,
    //     "courseId": 3,
    //     "sectionId": 19,
    //     "semesterSessionId": 20241,
    //     "sectionType": "LAB",
    //     "classSchedules": [
    //         {
    //             "startTime": "10:06",
    //             "endTime": "20:50",
    //             "day": "MONDAY"
    //         },
    //         {
    //             "startTime": "10:06",
    //             "endTime": "20:50",
    //             "day": "TUESDAY"
    //         }
    //     ]
    // },
    // {
    //     "studentPortfolioId": 53,
    //     "courseId": 6,
    //     "sectionId": 32,
    //     "semesterSessionId": 20241,
    //     "sectionType": "LAB",
    //     "classSchedules": [
    //         {
    //             "startTime": "12:06",
    //             "endTime": "18:50",
    //             "day": "MONDAY"
    //         },
    //         {
    //             "startTime": "12:06",
    //             "endTime": "18:50",
    //             "day": "TUESDAY"
    //         }
    //     ]
    // },
    // {
    //     "studentPortfolioId": 52,
    //     "courseId": 6,
    //     "sectionId": 32,
    //     "semesterSessionId": 20241,
    //     "sectionType": "LAB",
    //     "classSchedules": [
    //         {
    //             "startTime": "12:06",
    //             "endTime": "18:50",
    //             "day": "MONDAY"
    //         },
    //         {
    //             "startTime": "12:06",
    //             "endTime": "18:50",
    //             "day": "TUESDAY"
    //         }
    //     ]
    // },
    // {
    //     "studentPortfolioId": 52,
    //     "courseId": 2,
    //     "sectionId": 100,
    //     "semesterSessionId": 20241,
    //     "sectionType": "OTHER",
    //     "classSchedules": [
    //         {
    //             "startTime": "11:11:00",
    //             "endTime": "11:11:00",
    //             "day": "SATURDAY"
    //         }
    //     ]
    // }
]

start = '09:33';
end = '23:30';

//Sample Ends

ngOnInit(): void {

   console.log(
    this.scheduleService.checkTimeInRange(this.start, this.end))
}









}
