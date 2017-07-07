import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { detailPage } from '../page2/page2';
import { Homework } from '../../app/homework';
import { Service } from '../../app/homework-service';
import { SortingHelper } from '../../app/SortingHelper';

@Component({
  selector: 'myhomework',
  templateUrl: 'page1.html',
  providers : [Service, SortingHelper]
})
export class myhomework implements OnInit{
	theHomeworks : Homework[] = [];
	selectedHomework : Homework;
	tomorrowHomeworks : Homework[] = [];
	todaysDate : Date = new Date();

  constructor(public navCtrl: NavController,
		private theService : Service, private sortingHelper : SortingHelper) {}

	getHomeworks() : void{
		this.theHomeworks = this.theService.getHomeworks()
	}

  checkIfHomeworkTomorrow(){
    return this.tomorrowHomeworks.length > 0
  }
  
  sortHomeworks(){
	this.sortingHelper.quickSort(this.theHomeworks, 0, this.theHomeworks.length - 1)
  }
  
  getHomeworkImage(subject : string){
	return this.theService.getSubjectImage(subject)
  }
  
  filterHomeworks(){
 	var i = this.theHomeworks.length;
	while(i--){
			
	var theHomeworkDate = new Date(this.theHomeworks[i].date)	
	if((
	   (theHomeworkDate.getDate()  - this.todaysDate.getDate() == 1) &&
		 theHomeworkDate.getMonth() == this.todaysDate.getMonth()))
	   {
		this.tomorrowHomeworks.push(this.theHomeworks[i])
		this.theHomeworks.splice(i, 1)
	   }
	else if((
		(theHomeworkDate.getDate() == 28 && theHomeworkDate.getMonth() == 3) ||
			theHomeworkDate.getDate() == 30 || theHomeworkDate.getDate() == 31)
			&& this.todaysDate.getDate() == 1)
		{
		  this.tomorrowHomeworks.push(this.theHomeworks[i])
		  this.theHomeworks.splice(i, 1)
		}
	}
 }
	ngOnInit() : void
	{
		this.getHomeworks()
		this.filterHomeworks();
		this.sortHomeworks();
	}

	itemTapped(event, work) {
		this.navCtrl.push(detailPage, {
		  theWork: work
		});
	}
}
