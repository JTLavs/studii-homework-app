import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Service } from '../../app/homework-service';
import { Events } from 'ionic-angular';

@Component({
  selector: 'detail-page',
  templateUrl: 'page2.html',
})
export class detailPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
			private theService : Service, private alertCtrl : AlertController, private events : Events) {
			
		this.selectedItem = navParams.get('theWork');
	}

	updateExamStatus(selectedItem:any, topicName : string ) : void{
		this.theService.updateExamStatus(this.selectedItem, topicName);
	}

	updateHomeworkStatus():void
	{
		let alert = this.alertCtrl.create({
		title: `Homework Completed?`,
		subTitle : `(This will remove the homework)`,
		buttons: [
				{ text: 'Yes', handler: () => {
				this.theService.removeHomework(this.selectedItem)
				this.events.publish('Homework Deleted', this.selectedItem)
				this.navCtrl.pop();
				}
			}, { text: 'No', role: 'cancel'}],
			enableBackdropDismiss : true,
			cssClass : '.alert'
		});
		alert.present();
	}
}
