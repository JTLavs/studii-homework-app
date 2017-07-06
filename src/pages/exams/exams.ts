import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';
import { detailPage } from '../page2/page2';
import { Exam } from '../../app/exam';
import { Service } from '../../app/homework-service';

@Component({
  selector: 'myexams',
  templateUrl: 'exams.html',
  providers : [Service]
})
export class myexams implements OnInit{
	exams : Exam[];
	selectedExam : Exam;
	todaysDate : Date = new Date();

  constructor(public navCtrl: NavController,
		private theService : Service) {}
		
	getAllExams(){
		return this.theService.getExams().then(exams => this.exams = exams);
	}

	ngOnInit() : void
	{
		this.getAllExams();
		this.theService.removeExamsInPast();
	}

  getSubjectImage(subjectName : string){
    return this.theService.getSubjectImage(subjectName)
  }

	itemTapped(event, work) {
		this.navCtrl.push(detailPage, {
		  theWork: work
		});
	}
}
