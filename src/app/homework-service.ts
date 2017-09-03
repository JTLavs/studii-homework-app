import { Injectable } from '@angular/core';
import { Homework, Resource, Subject, Exam, Topics } from './homework';
import { EXAMS, HOMEWORKS, SUBJECTS, RESOURCES } from './mock-homeworks';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Injectable()
export class Service
{
    public theSubjectArray : Subject[] = [];
	public theExamArray : Exam[] = [];
	public theHomeworkArray : Homework[] = [];
	
	private topic : Topics[];
	private returnedData;
	private HOMEWORK_KEY : string = "thehomeworks";
	private EXAM_KEY : string = "theexams";
	private SUBJECT_KEY : string = "thesubjects";
	private DONE_STATUS : string = "Done";
	private todaysDate : Date = new Date();
	
	constructor(private toast: ToastController, public storage : Storage){}
	
	showToast(msg){
	let toast =  this.toast.create({
      message: msg,
      duration: 3000,
      position:'bottom'
      
    })
    toast.present();
  }
	
	getAllHomeworks(){
		if(this.theHomeworkArray.length == 0 ){
			this.getWork(this.HOMEWORK_KEY).then(homeworks => this.theHomeworkArray = homeworks);
		}
		return this.theHomeworkArray;
	}

	getProfileName(){
		return this.getWork("name")
	}
	getProfileImage(){
		return this.getWork("image")
	}
	
	getResourcesForSubject(subjectName : string) : Resource[]{
		let associatedRecources : Resource[] = [];
		RESOURCES.forEach(function (resource){
		    if(resource.subject == subjectName){
				associatedRecources.push(resource)
			}
		});
		return associatedRecources;
	}
	
	setProfileName(theName : string){
		this.saveWork("name", theName);
	}
	setProfileImage(theImage : string){
		this.saveWork("image", theImage);
	}

	getExams(): Exam[]
	{
		if(this.theExamArray.length == 0){
			this.getWork(this.EXAM_KEY).then(exams => this.theExamArray = exams);
		}
		return this.theExamArray;
	}
	
	/**getTopicsOnExams(exam : Exam) : Topics[]
	{
		let index  = this.theExamArray.indexOf(exam);
		//return this.getExams().then(exams => exams.find(exam => exam === exam).topics);
		return this.theExamArray[index].topics;
	}**/
	
	updateTopicStatus(exam : Exam, topicName : string){
		this.topic = exam.topics.filter(topic => topic.topicName == topicName)
		this.topic[0].status = this.DONE_STATUS
	    this.saveWork('theexams', this.theExamArray);
	}
	
	getSubjects(){
		return Promise.resolve(this.getWork(this.SUBJECT_KEY));
		//return this.theSubjectArray;
	}
	
	removeSubject(subject : Subject){
		this.deleteSubjectFromOtherItems(this.EXAM_KEY, this.theExamArray, subject.name)
		this.deleteSubjectFromOtherItems(this.HOMEWORK_KEY, this.theHomeworkArray, subject.name)
	}

	deleteSubjectFromOtherItems(key: string, array : any, name : string){
		let i = array.length;
		while(i--){
			if(array[i].subject == name){
				array.splice(i,1)
			}
		}
		this.saveWork(key, array)
	}
	
	removeItemsInPast(array : any[]){
		let i = array.length;
		while(i--){
			if(new Date(array[i].date) < this.todaysDate){
				array.splice(i,1);
			}
		}
		return array;
	}

	getSubjectImage(subjectName : string) : string{
		let imageString = subjectName.toLowerCase() + "-icon";
		if(subjectName.toLowerCase().includes("english")){
			imageString = "english-icon"
		}else if(subjectName.toLowerCase().includes("maths")){
			imageString = "maths-icon"
		}else if(subjectName.toLowerCase().includes("science")){
			imageString = "icon-physics"
		}
		return "img/"+imageString+".png"
	}

	addHomework(dueDate : string, description : string, subject : string){
		this.theHomeworkArray.push({subject : subject, date : dueDate, details : description});
		this.saveWork(this.HOMEWORK_KEY, this.theHomeworkArray);
	}
	
	addExam(name : string, subject : string, date: string, topics:Topics[]){
		this.theExamArray.push({ name :name, subject : subject, date : date, topics : topics});
		this.saveWork(this.EXAM_KEY, this.theExamArray);
	}
		

	saveWork(key : string, arr : any){
		this.storage.set(key, arr)
	}

	getWork(key : string){
		return Promise.resolve(this.storage.get(key));
	}

}
