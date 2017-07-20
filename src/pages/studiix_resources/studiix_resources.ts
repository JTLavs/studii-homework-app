import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Service } from '../../app/homework-service';
import { Resource } from '../../app/homework';
import { AlertController } from 'ionic-angular'

@Component({
  selector: 'studiix-resources',
  templateUrl: 'studiix_resources.html',
  providers : [Service]
})
export class StudiixResources implements OnInit{
	resources : Resource[] = [];
	theSubject : string;

  constructor(private theService : Service, private navParams : NavParams) {}

	getResources(){
		this.theSubject = this.navParams.get('subjectName');
		this.resources = this.theService.getResourcesForSubject(this.theSubject);
	}
	
	openLink(url){
		window.open(url, '_system', 'location=yes')
		return false;
	}
	
	ngOnInit() : void{
		this.getResources();
	}
}
