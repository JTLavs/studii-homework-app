import { Injectable } from '@angular/core';
import { Homework, Resource, Subject, Exam, Topics } from './homework';
import { EXAMS, HOMEWORKS, SUBJECTS, RESOURCES } from './mock-homeworks';
//import { NativeStorage } from '@ionic-native/native-storage';

@Injectable()
export class Service
{
	private topic : Topics[];
	private HOMEWORK_KEY : string = "thehomeworks";
	private EXAM_KEY : string = "theexams";
	private SUBJECT_KEY : string = "thesubjects";
	private DONE_STATUS : string = "Done";
	private PROFILE_NAME : string = "James"
	private PROFILE_IMAGE : string = "avatarBoy"
	private todaysDate : Date = new Date();
	private tomorrowHomeworks : Homework[] = [];
	private upcomingHomeworks : Homework[] = [];
	private subjectsWithResources : Subject[] = [];
	
	
	getUpcomingHomeworks() : Homework[]{
		return this.upcomingHomeworks;
	}
	
	getTomorrowsHomeworks() : Homework[]{
		return this.tomorrowHomeworks;
	}

	//GET METHODS
	getProfileName() : string{
		return this.PROFILE_NAME
		//for devices - return this.getWork("name")
	}
	getProfileImage() : string{
		return this.PROFILE_IMAGE
		//for devices - return this.getWork("image")
	}
	
	getResourcesForSubject(subjectName : string){
	console.log("function called")
		let associatedRecources : Resource[] = [];
		RESOURCES.forEach(function (resource){
		    if(resource.subject == subjectName){
				associatedRecources.push(resource)
				console.log("IN IF")
			}
		});
		return associatedRecources;
	}
	
	//SET METHODS
	setProfileName(theName : string){
		this.PROFILE_NAME = theName;
		//this.saveWork("name", name);
	}
	setProfileImage(theImage : string){
		this.PROFILE_IMAGE = theImage;
		///this.saveWork("image", theImage);
	}
	
	countHomeworksBySubject(subjectName : string): number {
		let homeworkSubjectCount = 0;
		for(let aHomework of HOMEWORKS){
			if(aHomework.subject == subjectName){
				homeworkSubjectCount++;
			}
		}
		return homeworkSubjectCount;
	}

	getExams(): Promise<Exam[]>
	{
		this.removeItemsInPast(EXAMS);
		return Promise.resolve(EXAMS);
		//for devices - return this.getWork(this.EXAM_KEY);
	}
	getTopicsOnExams(exam : Exam) : Promise<Topics[]>
	{
		return this.getExams().then(exams => exams.find(exam => exam === exam).topics);
	}
	getSubjects(): Subject[]{
		return SUBJECTS;
	}

	addScoreToSubject(subject : Subject, score:number){
		subject.totalPercentageScores = Number(subject.totalPercentageScores) + Number(score)
		subject.numberOfTests +=1
	}

	updateTarget(subject : Subject, number : number){
		subject.target = number
	}

	removeSubject(subject : Subject)
	{
		this.deleteSubjectFromOtherItems(this.EXAM_KEY, EXAMS, subject.name)
		this.deleteSubjectFromOtherItems(this.HOMEWORK_KEY, HOMEWORKS, subject.name)
		SUBJECTS.splice(SUBJECTS.indexOf(subject),1)
	}

	deleteSubjectFromOtherItems(key: string, array : any, name : string){
		let i = array.length;
		while(i--){
			if(array[i].subject == name){
				array.splice(i,1)
			}
		}
		//this.saveWork(key, array)
	}

	removeHomework(theHomework : Homework){
		HOMEWORKS.splice(HOMEWORKS.indexOf(theHomework), 1)
		//this.saveWork(key, array)
	}
	
	removeItemsInPast(array : any[]){
		let i = array.length;
		while(i--){
			if(new Date(array[i].date) < this.todaysDate){
				array.splice(i,1);
			}
		}
		//this.saveWork(key, array)	
	}

	updateExamStatus(exam : Exam, topicName : string)
	{
		this.topic = exam.topics.filter(topic => topic.topicName == topicName)
		this.topic[0].status = this.DONE_STATUS

	  this.saveWork(this.EXAM_KEY, this.getExams());
	}

	getSubjectImage(subjectName : string){
		let imageString = subjectName.toLowerCase() + "-icon";
		if(subjectName.toLowerCase().includes('english')){
			imageString = 'english-icon'
		}else if(subjectName.toLowerCase().includes('maths')){
			imageString = 'maths-icon'
		}else if(subjectName.toLowerCase().includes('science')){
			imageString = 'icon-physics'
		}
		return "img/"+imageString+".png"
	}

	//ADD METHODS
	
	addHomework(dueDate : string, description : string, subject : string){
			HOMEWORKS.push({subject : subject, date : dueDate, details : description});
			this.saveWork(this.HOMEWORK_KEY, HOMEWORKS);
	}
	
	addExam(name : string, subject : string, date: string, topics:Topics[]){
		EXAMS.push(
			{ name :name, subject : subject, date : date, topics : topics});
			//this.saveWork(this.EXAM_KEY, this.getExams());
	}
		
	addAllSubjects(subjects : Subject[])
	{
		subjects.forEach(function (theSubject){
		    this.addSubject(theSubject.name)
		})
	}

	addSubject(subjectName : string){
		SUBJECTS.push({name : subjectName, totalPercentageScores : 0, numberOfTests : 0, target : 0})
	}

	saveWork(key : string, arr : any){
		//this.nativeStorage.setItem(key,arr)
	}

	getWork(key : string){
		//this.nativeStorage.getItem(key);
	}
	
  filterHomeworks(){
 	let i = HOMEWORKS.length;
	while(i--){		
		var theHomeworkDate = new Date(HOMEWORKS[i].date)	
		if(((theHomeworkDate.getDate()  - this.todaysDate.getDate() == 1) && theHomeworkDate.getMonth() == this.todaysDate.getMonth())){
			this.tomorrowHomeworks.push(HOMEWORKS[i])
		}else if(((theHomeworkDate.getDate() == 28 && theHomeworkDate.getMonth() == 3) || theHomeworkDate.getDate() == 30 || theHomeworkDate.getDate() == 31)
				&& this.todaysDate.getDate() == 1){
			  this.tomorrowHomeworks.push(HOMEWORKS[i])
		}
		else{
			this.upcomingHomeworks.push(HOMEWORKS[i]);
		}
	}
	this.removeItemsInPast(this.upcomingHomeworks);
 }
}
