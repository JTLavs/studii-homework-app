import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { detailPage } from '../page2/page2';
import { Homework } from '../../app/homework';
import { Service } from '../../app/homework-service';

@Component({
  selector: 'myhomework',
  templateUrl: 'page1.html',
  providers : [Service]
})
export class myhomework implements OnInit{
	homeworks : Homework[];
	selectedHomework : Homework;
  tomorrowHomeworks : Homework[] = [];
  todaysDate : Date = new Date();

  constructor(public navCtrl: NavController,
		private theService : Service) {}

	getHomeworks() : void{
		this.theService.getHomeworks().then(
      homeworks => this.homeworks = homeworks).then(
        homeworks =>{
		    var i = homeworks.length;
			while(i--){
			
				var theHomeworkDate = new Date(homeworks[i].date)	
				if((
				   (theHomeworkDate.getDate()  - this.todaysDate.getDate() == 1) &&
					 theHomeworkDate.getMonth() == this.todaysDate.getMonth()))
				   {
						  this.tomorrowHomeworks.push(homeworks[i])
						  this.homeworks.splice(i, 1)
				   }
				   else if((
					 (theHomeworkDate.getDate() == 28 && theHomeworkDate.getMonth() == 3) ||
						theHomeworkDate.getDate() == 30 || theHomeworkDate.getDate() == 31)
						&& this.todaysDate.getDate() == 1)
				   {
						  this.tomorrowHomeworks.push(homeworks[i])
						  this.homeworks.splice(i, 1)
				   }
			}
      })
	}

  checkIfHomeworkTomorrow(){
    return this.tomorrowHomeworks.length > 0
  }
  
  getHomeworkImage(subject : string){
	return this.theService.getSubjectImage(subject)
  }
  

	ngOnInit() : void
	{
		this.getHomeworks()
	}

	itemTapped(event, work) {
		this.navCtrl.push(detailPage, {
		  theWork: work
		});
	}
}
