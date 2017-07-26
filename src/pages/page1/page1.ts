import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { detailPage } from '../page2/page2';
import { Homework } from '../../app/homework';
import { Service } from '../../app/homework-service';
import { Events } from 'ionic-angular';

@Component({
    selector: 'myhomework',
    templateUrl: 'page1.html',
    providers : [Service]
})
export class myhomework implements OnInit{
	upcomingHomeworks : Homework[] = [];
	selectedHomework : Homework;
	tomorrowHomeworks : Homework[] = [];
	todaysDate : Date = new Date();

    constructor(public navCtrl: NavController, private theService : Service, public events : Events) {
		this.events.subscribe('Homework Deleted', (theHomework)=> {
			this.removeHomework(theHomework)
		})
	}

	getHomeworks(){
		this.upcomingHomeworks = this.theService.getUpcomingHomeworks();
		this.tomorrowHomeworks = this.theService.getTomorrowsHomeworks();
	}
	
	checkIfNoHomeworks(){
	return (!this.checkIfHomeworkTomorrow && this.tomorrowHomeworks.length == 0);
	}

	checkIfHomeworkTomorrow(){
		return this.tomorrowHomeworks.length > 0
	}
  
	sortHomeworks(){
		this.upcomingHomeworks.sort(this.compare);
	}
  
	getHomeworkImage(subject : string){
		return this.theService.getSubjectImage(subject)
	}

	removeHomework(theHomework : Homework){	
		if(this.upcomingHomeworks.indexOf(theHomework) > -1){
				this.upcomingHomeworks.splice(this.upcomingHomeworks.indexOf(theHomework), 1)
		}else{
			this.tomorrowHomeworks.splice(this.tomorrowHomeworks.indexOf(theHomework), 1)
		}
	}
	
	ngOnInit() : void{
		this.theService.sortHomeworksAndRemovePastHomeworks();
		this.getHomeworks();
		this.sortHomeworks();
	}

	itemTapped(event, work) {
		this.navCtrl.push(detailPage, {
		  theWork: work
		});
	}
	
	compare(a,b){
		return new Date(a.date).getTime() - new Date(b.date).getTime();
	}
}
