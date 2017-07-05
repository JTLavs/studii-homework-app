import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Class } from '../../app/class';
import { Service } from '../../app/homework-service';

@Component({
  selector: 'timetable',
  templateUrl: 'timetable.html',
  providers : [Service]
})
export class TimeTable implements OnInit{
  classes : Class[];
  selectedClass : Class;
  theDaysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  theDay : string;
  currentDate : Date
  today : number;
  currentHours : number;
  currentMinute : number;
  thePeriods: string[] = [];

  constructor(public navCtrl: NavController,
		private theService : Service)
    {
      this.currentDate = new Date()
      this.today = this.currentDate.getDay()
      this.currentHours = this.currentDate.getHours()
      this.currentMinute = this.currentDate.getMinutes()
      this.theDay = this.theDaysOfWeek[this.today]
      if(this.theDay == 'Saturday' || this.theDay == 'Sunday')
      {
          this.theDay = 'Monday';
      }
    }

  getClasses() : void{
    this.theService.getClasses().then(
      classes => this.classes = classes)
  }

  currentClassMarker(day, periodStart, periodEnd){
    periodStart = periodStart.split(':')
    periodEnd = periodEnd.split(':')
    if(periodEnd[1] == '00')
    {
      periodEnd[1] = '60'
    }
    return ((periodStart[0] <= this.currentHours && periodStart[1] <= this.currentMinute)
            && (this.currentHours <= periodEnd[0] && this.currentMinute <= periodEnd[1]))
  }

  ngOnInit() : void
  {
    this.getClasses()
  }
}
