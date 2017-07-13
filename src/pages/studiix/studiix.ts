import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Service } from '../../app/homework-service';
import { Subject } from '../../app/homework';
import { AlertController } from 'ionic-angular';
import { StudiixResources } from '../../pages/studiix_resources/studiix_resources';

@Component({
  selector: 'studiix',
  templateUrl: 'studiix.html',
  providers : [Service]
})
export class Studiix implements OnInit{
	subjects : Subject[] = [];

  constructor(public navCtrl: NavController, private theService : Service, private alertCtrl : AlertController) {}

	getSubjects(){
		this.subjects = this.theService.getSubjectsWithResources();
	}
  
	getSubjectImage(subject : string){
		return this.theService.getSubjectImage(subject)
	}
	
	ngOnInit() : void{
		this.getSubjects()
			let alert = this.alertCtrl.create({
			title: 'studiiX',
			subTitle: 'Here you will find the subjects with resources and materials gathered from the internet.\n\n'+
					  'Just choose a subject to expand your knowledge and explore.',
			buttons: ['OK'],
			cssClass : 'alert'
		  });
		alert.present();
	}

	itemTapped(event, subject) {
		this.navCtrl.push(StudiixResources, {
		  subjectName: subject
		});
	}
}
