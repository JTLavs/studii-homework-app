import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { detailPage } from '../page2/page2';
import { Exam } from '../../app/homework';
import { Service } from '../../app/homework-service';

@Component({
    selector: 'myexams',
    templateUrl: 'exams.html',
    providers : [Service]
})
export class myexams implements OnInit{
	exams : Exam[] = [];
	selectedExam : Exam;

    constructor(public navCtrl: NavController, private theService : Service) {}

	ngOnInit() : void{
		this.exams = this.getAllExams();
	}
	
	getAllExams(){
		return this.theService.removeItemsInPast(this.theService.getExams());
	}

    getSubjectImage(subjectName : string){
        return this.theService.getSubjectImage(subjectName)
    }
  
    checkIfExamsExist(){
	    return (this.exams.length > 0)
    }
	
	itemTapped(event, work) {
		this.navCtrl.push(detailPage, { theWork: work });
	}
}
