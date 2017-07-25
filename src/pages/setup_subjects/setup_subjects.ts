import { Component} from '@angular/core';
import { Subject } from '../../app/homework';
import { Service } from '../../app/homework-service';
import { NavController } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { Profile } from '../../pages/profile/profile;

@Component({
    selector: 'setup_subjects',
    templateUrl: 'setup_subjects.html'
})

export class SetupSubjects{
    subjects : Subject[] = [];
    subjectName : string;
    constructor(private subjectsService : Service, private keyboard : Keyboard, private nav : NavController) {}

    addSubject(){
        if(this.subjectName.toLowerCase() == 'science'){
		    this.subjects.push({name : 'Physics', totalPercentageScores: 0, numberOfTests : 0, target : 0},
			    {name : 'Chemistry', totalPercentageScores: 0, numberOfTests : 0, target : 0},
			    {name : 'Biology', totalPercentageScores: 0, numberOfTests : 0, target : 0})
	    }
		this.subjects.push({name : this.subjectName, totalPercentageScores: 0, numberOfTests : 0, target : 0})
        this.subjectName = ""
    }

    removeSubject(subject){
        this.subjects.splice(this.subjects.indexOf(subject), 1);
    }
  
    isAddDisabled(){
        return (this.subjectName == "" || this.subjectName == undefined)
    }
  
    closeKeyboard(){
        this.keyboard.close();
    }
  
    isFinishDisabled(){
        return (this.subjects.length == 0)
    }

    nextStep(){
        this.subjectsService.addAllSubjects(this.subjects);
        this.nav.setRoot(Profile)
    }
}
