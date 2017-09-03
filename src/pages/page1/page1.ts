import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { detailPage } from '../page2/page2';
import { Homework } from '../../app/homework';
import { Service } from '../../app/homework-service';
import { Events } from 'ionic-angular';

@Component({
    selector: 'myhomework',
    templateUrl: 'page1.html',
})
export class myhomework implements OnInit{
	upcomingHomeworks : Homework[] = [];
	selectedHomework : Homework;
	tomorrowHomeworks : Homework[] = [];
	allHomeworks : Homework[] = [];
	todaysDate : Date = new Date();

    constructor(public navCtrl: NavController, private theService : Service, public events : Events) {
		this.events.subscribe('Homework Deleted', (theHomework)=> {
			this.removeHomework(theHomework)
		})
	}

	getHomeworks(){
		this.allHomeworks = this.theService.getAllHomeworks();
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
		this.allHomeworks.splice(this.allHomeworks.indexOf(theHomework), 1)
		this.theService.saveWork('thehomeworks', this.allHomeworks);
		this.getHomeworks();
	}
	
	removePastHomeworks(){
 	    let i = this.allHomeworks.length;
	    while(i--){
		    let theHomeworkDate = new Date(this.allHomeworks[i].date);
			let theHomeworkDay = theHomeworkDate.getDate();
			let theHomeworkMonth = theHomeworkDate.getMonth();
			
		    if(this.checkIsHomeworkTomorrow(this.todaysDate, theHomeworkDay, theHomeworkMonth)){
			    this.tomorrowHomeworks.push(this.allHomeworks[i])
		    }
		    else{
			    this.upcomingHomeworks.push(this.allHomeworks[i]);
		    }
	    }
 	    this.upcomingHomeworks = this.theService.removeItemsInPast(this.upcomingHomeworks);
		this.theService.showToast("HOMEWORKS SORTED");
		this.theService.showToast("UPCOMING HOMEWORKS LENGTH" + this.upcomingHomeworks.length)
    }
	
	checkIsHomeworkTomorrow(todaysDate, dateOfHomework, monthOfHomework) : boolean{
	    return this.isHomeworkTomorrowAndSameMonth(todaysDate, dateOfHomework, monthOfHomework) || 
		this.isHomeworkTomorrowAndLastMonthDay(todaysDate, dateOfHomework)
	}
	
    isHomeworkTomorrowAndLastMonthDay(todaysDate, dateOfHomework) : boolean{
		return (((todaysDate == 28 && todaysDate.getMonth() == 3) || todaysDate.getDate() == 30 || todaysDate.getDate() == 31) && dateOfHomework == 1)
    }
	
	isHomeworkTomorrowAndSameMonth(todaysDate, dateOfHomework, monthOfHomework) : boolean{
	    return ((dateOfHomework  - todaysDate.getDate() == 1) && monthOfHomework == todaysDate.getMonth())
	}
	
	ngOnInit() : void{
		this.getHomeworks();
		this.removePastHomeworks();
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
