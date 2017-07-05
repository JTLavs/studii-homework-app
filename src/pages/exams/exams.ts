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
	completedExams : Exam[] = [];
	selectedExam : Exam;
	todaysDate : Date = new Date();

  constructor(public navCtrl: NavController,
		private theService : Service) {}

	getExamsAndFilter() : void{
		this.theService.getExams().then(
		  exams => this.exams = exams).then(
			exams =>{
			var i = exams.length;
				while(i--){
				
					var examDate = new Date(exams[i].date)	
					if(examDate < this.todaysDate)
					   {
							  this.completedExams.push(exams[i])
							  this.exams.splice(i, 1)
					   }
				}
			})
	}

	ngOnInit() : void
	{
		this.getExamsAndFilter();
	}

  getSubjectImage(subjectName : string){
    return this.theService.getSubjectImage(subjectName)
  }
  
  checkIfAnyComplete(){
	return this.completedExams.length > 0;
  }

	itemTapped(event, work) {
		this.navCtrl.push(detailPage, {
		  work: work
		});
	}
}
