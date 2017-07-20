import { Component, OnInit } from '@angular/core';
import { AlertController } from 'ionic-angular'
import { Subject } from '../../app/homework';
import { Service } from '../../app/homework-service';


@Component({
  selector: 'profile',
  templateUrl: 'profile.html'
})
export class Profile implements OnInit{
  subjects : Subject[];
  profileName : string;
  profileImage : string;
  imageSource : string;

  constructor(private subjectsService : Service,
    private alertCtrl : AlertController) {}

  getInfo() : void{
    this.subjectsService.getSubjects().then(subjects => this.subjects = subjects);
    this.profileName = this.subjectsService.getProfileName();
    this.profileImage = this.subjectsService.getProfileImage();
  }

  calculateAverage(subject){
	if(subject.numberOfTests <= 0)
	{
		return subject.numberOfTests.toPrecision(3)
	}
    return (subject.totalPercentageScores / subject.numberOfTests).toPrecision(3)
  }
  
  getNumberOfHomeworks(subjectName){
	return this.subjectsService.countHomeworksBySubject(subjectName);
  }

  showOKAlert(title : string, subTitle : string){
    let alert = this.alertCtrl.create({
    title: title,
    subTitle: subTitle + '.',
    buttons: ['OK'],
    enableBackdropDismiss : true,
    cssClass : '.alert'
  });
  alert.present();
  }

  presentAddScorePrompt(subject : Subject) {
  let alert = this.alertCtrl.create({
    title: 'Add score for '+subject.name,
    inputs: [{ name: 'score', placeholder: 'Score (in percentage %)' }],
    buttons: [
      { text: 'Add', handler: data => {
		if(this.isNumberValid(data.score)){
			this.subjectsService.addScoreToSubject(subject, data.score)
			this.showOKAlert('Score Added', data.score +'% added to '+subject.name)
		}else{
			this.showOKAlert('Error', 'You must enter a number between 0 and 100');
		}
        }
      },
      { text: 'Cancel', role: 'cancel'}]
  });
  alert.present();
}

	presentTargetPrompt(subject : Subject) {
		let alert = this.alertCtrl.create({
		  title: `Update `+subject.name +` target`,
		  subTitle : `Current target : `+subject.target,
		  inputs: [
			{ name: 'target', placeholder: 'Target percentage (%)' }],
		  buttons: [
			{ text: 'Add', handler: data => {
				if(this.isNumberValid(data.target)){
					var oldTarget = subject.target
					this.subjectsService.updateTarget(subject, data.target)
					this.showOKAlert('Target updated', 'You updated '+subject.name+
					  ' target from '+oldTarget +' % to '+data.target+'%')
				  }else{
					this.showOKAlert('Error', 'You must enter a number between 0 and 100');
				  }
			  }
			}, { text: 'Cancel', role: 'cancel'}],
			enableBackdropDismiss : true,
			cssClass : '.alert'
		  });
		  alert.present();
	}

removeSubject(subject : Subject) {
let alert = this.alertCtrl.create({
  title: `Are you sure you want to remove `+subject.name + `?`,
  subTitle : `(This will also remove classes, exams and homeworks for this subject)`,
  buttons: [
    { text: 'Yes', handler: () => {
        this.showOKAlert('Subject Removed', subject.name + ' has been removed along with any classes, homeworks and exams.')
        this.subjectsService.removeSubject(subject)

      }
    }, { text: 'No', role: 'cancel'}],
    enableBackdropDismiss : true,
    cssClass : '.alert'
  });
  alert.present();
}

  presentAddSubject() {
  let alert = this.alertCtrl.create({
    title: 'Add a new subject',
    inputs: [
      { name: 'subjectName', placeholder: 'Subject' }
    ],
    buttons: [
      { text: 'Add', handler: data => {
          this.subjectsService.addSubject(data.subjectName.toLowerCase())
          this.showOKAlert('Subject Added', data.subjectName + ' has been added to your subjects.')
        }
      }, { text: 'Cancel', role: 'cancel'}],
    enableBackdropDismiss : true
    });
    alert.present();
  }

  isAverageGreaterThanTarget(totalScore : number, noOfTests: number, target  : number){
    if((totalScore / noOfTests) > target){
      return "green"
    }
      return "red"
  }
  
  isNumberValid(number){
	return (!(isNaN(number)) && (number >=0 && number <=100))
  }

	ngOnInit() : void{
		this.getInfo();
    this.imageSource = "img/"+this.profileImage +".png"
	}
}
