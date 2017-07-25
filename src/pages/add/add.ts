import { Component, ViewChild, OnInit} from '@angular/core';
import { Service } from '../../app/homework-service';
import { Subject, Topics } from '../../app/homework';
import { AlertController } from 'ionic-angular'

@Component({
  selector: 'add-item',
  templateUrl: 'add.html',
  providers : [Service]

})
export class AddItem implements OnInit{
    @ViewChild('topicInput') topicInput;
    private subject : string;
    private date : string = new Date().toISOString();

    private task:string;
    private homeworkDetails : string;
    private subjects : Subject[];

    private examName:string;
    private theTopics : Topics[] = [];
    private topicName : string;

    constructor(private service : Service, private alertCtrl: AlertController){this.service = service;}

    ngOnInit() : void{
        this.subjects =  this.service.getSubjects();
    }

    addTopicsForExam(){
        this.theTopics.push({topicName : this.topicName, status : 'Not Complete'});
        this.topicName = "";
        this.topicInput.setFocus();
    }

    showAlert(title : string, subTitle : string){
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle + ".",
            buttons: ["OK"],
            cssClass : "alert"
        });
        alert.present();
    }

    addHomework(){
        this.service.addHomework(this.date, this.homeworkDetails, this.subject);
        this.showAlert("Homework Added", "You added a" + this.subject + " homework.");
    }
  
    homeworkValidate(){
      return (this.homeworkDetails == "" || this.subject == "" || this.task == "")
    }
  
    examValidate(){
	  return (this.theTopics.length == 0 || this.subject == "" || this.examName == "")
    }

    addExam(){
        this.service.addExam(this.examName, this.subject, this.date, this.theTopics);
        this.showAlert("Exam added.", this.examName);
        this.theTopics = []
    } 
}
