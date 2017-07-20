import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Service } from '../../app/homework-service';
import { Subject } from '../../app/homework';
import { StudiixResources } from '../../pages/studiix_resources/studiix_resources';

@Component({
  selector: 'studiix',
  templateUrl: 'studiix.html',
  providers : [Service]
})
export class Studiix implements OnInit{
	subjects : Subject[] = [];

  constructor(public navCtrl: NavController, private theService : Service) {}

	getSubjects(){
		this.subjects = this.theService.getSubjectsWithResources();
	}
  
	getSubjectImage(subject : string){
		return this.theService.getSubjectImage(subject)
	}
	
	ngOnInit() : void{
		this.getSubjects()
	}

	itemTapped(event, subject) {
		this.navCtrl.push(StudiixResources, {subjectName: subject});
	}
}
