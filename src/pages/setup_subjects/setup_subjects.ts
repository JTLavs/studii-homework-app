 import { Component} from '@angular/core';
import { Subject } from '../../app/homework';
import { NavController } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { Profile } from '../../pages/profile/profile';
import { AlertController } from 'ionic-angular'
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
import { Service } from '../../app/homework-service';

@Component({
    selector: 'setup_subjects',
    templateUrl: 'setup_subjects.html',
})

export class SetupSubjects{
    subjects : Subject[] = [];
    subjectName : string;
    constructor(private keyboard : Keyboard, private nav : NavController, private alertCtrl: AlertController, private storage : Storage, 
		private toast: ToastController, private service : Service) {}
		
	showToast(msg){
	let toast =  this.toast.create({
      message: msg,
      duration: 3000,
      position:'bottom'
      
    })
    toast.present();
  }

    addSubject(){
        if(this.checkIfScienceSubject(this.subjectName.toLowerCase())){
		    let alert = this.alertCtrl.create({title: 'Science Subject Added',
				subTitle: "We see you added a science subject, would you like to add all 3 separately, one Science subject or just "+this.subjectName+"?",
				buttons: [{
					text : "Add " + this.subjectName,
					handler : () => {this.subjects.push({name : this.subjectName, totalPercentageScores: 0, numberOfTests : 0, target : 0})}
				}, 
				{text : 'Add one Science subject',
					handler : () => {this.subjects.push({name : 'Science', totalPercentageScores: 0, numberOfTests : 0, target : 0})}
				},
				{text : 'Add all 3 separately',
					handler : () => {
						this.subjects.push({name : 'Physics', totalPercentageScores: 0, numberOfTests : 0, target : 0},
						{name : 'Chemistry', totalPercentageScores: 0, numberOfTests : 0, target : 0},
						{name : 'Biology', totalPercentageScores: 0, numberOfTests : 0, target : 0})
					}
				}],
				cssClass : "alert"
			});
			alert.present();
	    }
		else{
			this.subjects.push({name : this.subjectName, totalPercentageScores: 0, numberOfTests : 0, target : 0})
		}
        this.subjectName = ""
    }

    removeSubject(subject){
        this.subjects.splice(this.subjects.indexOf(subject), 1);
    }
  
    isAddDisabled(){
        return (this.subjectName == "" || this.subjectName == undefined)
    }
	
	checkIfScienceSubject(subjectName : string) : boolean{
		return (subjectName == 'science' || subjectName == 'physics' || subjectName == 'biology' || subjectName == 'chemistry') 
	}
  
    closeKeyboard(){
        this.keyboard.close();
    }
  
    isFinishDisabled(){
        return (this.subjects.length == 0)
    }

    nextStep(){
        this.storage.set('thesubjects', this.subjects).then(() =>  
		{
			this.nav.setRoot(Profile)
		} 
		);
    }
}
