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
		
	ngOnInit() : void{
		this.theService.getSubjects().then(subjects => this.subjects = subjects);
	}

	doesSubjectHaveResources(subjectName){
		return (this.theService.getResourcesForSubject(subjectName).length > 0)
	}
  
	getSubjectImage(subject : string){
		return this.theService.getSubjectImage(subject)
	}


	itemTapped(event, subject) {
		this.navCtrl.push(StudiixResources, {subjectName: subject});
	}
}
