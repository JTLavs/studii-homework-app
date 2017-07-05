import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Service } from '../../app/homework-service';

@Component({
  selector: 'detail-page',
  templateUrl: 'page2.html',
})
export class detailPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
			private homeworkService : Service, private alertCtrl : AlertController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('work');
	}

	updateExamStatus(selectedItem:any, topicName : string ) : void{
		this.homeworkService.updateExamStatus(this.selectedItem, topicName);
	}

	updateHomeworkStatus():void
	{
		let alert = this.alertCtrl.create({
		title: `Homework Completed?`,
		subTitle : `(This will remove the homework)`,
		buttons: [
				{ text: 'Yes', handler: () => {
				this.homeworkService.removeHomework(this.selectedItem)
				this.navCtrl.pop();
				}
			}, { text: 'No', role: 'cancel'}],
			enableBackdropDismiss : true,
			cssClass : '.alert'
		});
		alert.present();
	}
}
