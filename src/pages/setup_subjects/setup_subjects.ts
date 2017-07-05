import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from '../../app/homework';
import { Service } from '../../app/homework-service';
import { NavController } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { Profile } from '../profile/profile';


@Component({
  selector: 'setup_subjects',
  templateUrl: 'setup_subjects.html'
})
export class SetupSubjects{
  @ViewChild('subjectNameInput') subjectNameInput;
  subjects : Subject[] = [];
  subjectName : string;
  constructor(private subjectsService : Service, private keyboard : Keyboard,
              private nav : NavController) {
    //this.subjectsService.getSubjects().then(subjects => this.subjects = subjects);
  }

  addSubject(){
    //this.subjectsService.addSubject(this.subjectName.toLowerCase())
    this.subjects.push({
      name : this.subjectName, totalPercentageScores: 0, numberOfTests : 0, target : 0,
        image : 'icon'+this.subjectName
    })
    this.subjectName = ""
  }

  removeSubject(subject){
    this.subjects.splice(this.subjects.indexOf(subject), 1);
  }
  isAddDisabled(){
    if(this.subjectName=="" || this.subjectName==null){
      return true;
    }
  }
  closeKeyboard(){
    this.keyboard.close();
  }
  isFinishDisabled(){
    if(this.subjects.length==0){
      return true;
    }
  }

  nextStep(){
    this.subjectsService.addAllSubjects(this.subjects);
    this.nav.setRoot(Profile)
  }
}
