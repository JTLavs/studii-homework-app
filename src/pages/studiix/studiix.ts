import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Service } from '../../app/homework-service';
import { Subject } from '../../app/homework';
import { AlertController } from 'ionic-angular'

@Component({
  selector: 'studiix',
  templateUrl: 'studiix.html',
  providers : [Service]
})
export class Studiix implements OnInit{
	subjects : Subject[] = [];

  constructor(public navCtrl: NavController, private theService : Service, private alertCtrl : AlertController) {}

	getSubjects(){
		this.theService.getSubjects().then(subjects => this.subjects = subjects);
	}
  
	getSubjectImage(subject : string){
		return this.theService.getSubjectImage(subject)
	}
	
	ngOnInit() : void{
		this.getSubjects()
			let alert = this.alertCtrl.create({
			title: 'studiiX',
			subTitle: 'Here you will find resources and materials gathered from the internet about your subjects.\n\nJust choose a subject to expand your knowledge and explore.',
			buttons: ['OK'],
			cssClass : 'alert'
		  });
		alert.present();
	}

	itemTapped(event, work) {
	//	this.navCtrl.push(detailPage, {
		//  theWork: work
		//});
	}
}
