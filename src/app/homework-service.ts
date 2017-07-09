import { Injectable } from '@angular/core';
import { Homework } from './homework';
import { Exam } from './exam';
import { Class } from './class';
import { Period } from './class';
import { Topics } from './exam';
import { Subject } from './homework';
import { EXAMS } from './mock-homeworks';
import { HOMEWORKS } from './mock-homeworks';
import { SUBJECTS } from './mock-homeworks';
import { CLASSES } from './mock-homeworks';
import { NativeStorage } from '@ionic-native/native-storage';

@Injectable()
export class Service
{
	private topic : Topics[];
	private HOMEWORK_KEY : string = "thehomeworks";
	private EXAM_KEY : string = "theexams";
	private CLASS_KEY : string = "theclass";
	private SUBJECT_KEY : string = "subjects";
	private DONE_STATUS : string = "Done";
	private NOT_COMPLETE : string = "Not Complete";
	private PROFILE_NAME : string = "James"
	private PROFILE_IMAGE : string = "avatarBoy"
	//private EXAMS : Exam[];
	private todaysDate : Date = new Date();
	private tomorrowHomeworks : Homework[] = [];
	private upcomingHomeworks : Homework[] = [];
	
	getUpcomingHomeworks() : Homework[]{
		console.log("CALLED" + this.upcomingHomeworks.length)
		return this.upcomingHomeworks;
	}
	
	getTomorrowsHomeworks() : Homework[]{
		console.log("CALLED" +  this.tomorrowHomeworks.length)
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
		var homeworkSubjectCount = 0;
		
		for(var aHomework of HOMEWORKS){
			if(aHomework.subject == subjectName){
				homeworkSubjectCount++;
			}
		}
		return homeworkSubjectCount;
	}


	getExams(): Promise<Exam[]>
	{
		return Promise.resolve(EXAMS);
		//for devices - return this.getWork(this.EXAM_KEY);
	}
	getTopicsOnExams(exam : Exam) : Promise<Topics[]>
	{
		return this.getExams().then(exams => exams.find(exam => exam === exam).topics);
	}
	getSubjects(): Promise<Subject[]>{
		return Promise.resolve(SUBJECTS);
	}

	getClasses(): Promise<Class[]>{
		return Promise.resolve(CLASSES);
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
		this.deleteSubjectFromOtherItems(this.CLASS_KEY, CLASSES, subject.name)

		SUBJECTS.splice(SUBJECTS.indexOf(subject),1)
	}

	deleteSubjectFromOtherItems(key: string, array : any, name : string){
		var i = array.length;
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
	removeExamsOrHomeworkInPast(array : any){
		var i = array.length;
		while(i--){
			if(new Date(array[i].date) < this.todaysDate){
				array.splice(i,1);
			}
		}
		//this.saveWork(key, array)	
	}
	removeClass(theClass : Class){
		for(var aClass of CLASSES){
			if(aClass === theClass){
					CLASSES.splice(CLASSES.indexOf(theClass,1))
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
		for(var theSubject of SUBJECTS){
			if(theSubject.name == subjectName){
				return "img/"+theSubject.image+".png"
			}
		}
	}

	//ADD METHODS
	
	addHomework(task : string, dueDate : string, description : string, subject : string)
	{
			HOMEWORKS.push(
				{ task : task, subject : subject, date : dueDate,
					details : description, image : this.getSubjectImage(subject)}
			);

			this.saveWork(this.HOMEWORK_KEY, HOMEWORKS);
	}
	
	addExam(name : string, subject : string, date: string, stuffNeeded:string ,topics:Topics[])
	{
		EXAMS.push(
			{ name :name, subject : subject, date : date,
				topics : topics, stuffNeeded:stuffNeeded}
			);

			this.saveWork(this.EXAM_KEY, this.getExams());
	}

	addClass(subject : string, periods : Period[], days : string[], room : string, color : string){
			CLASSES.push (
				{subject : subject, periods : periods, days: days, room : room,
					color: color}
			)
	}
		
	addAllSubjects(subjects : Subject[])
	{
		for(var theSubject of subjects){
			this.addSubject(theSubject.name)
		}
	}

	addSubject(subjectName : string){
		var imageString = 'icon'+subjectName
		if(subjectName.toLowerCase().includes('english')){
			imageString = 'iconEnglish'
		}else if(subjectName.toLowerCase().includes('maths')){
			imageString = 'iconMaths'
		}else if(subjectName.toLowerCase().includes('science')){
			imageString = 'iconScience'
		}
		SUBJECTS.push(
			{
				name : subjectName, totalPercentageScores : 0, numberOfTests : 0, target : 0,
				image : imageString}
			)
	}

	saveWork(key : string, arr : any){
		//this.nativeStorage.setItem(key,arr)
	}

	getWork(key : string){
		//this.nativeStorage.getItem(key);
	}
	
  filterHomeworks(){
 	var i = HOMEWORKS.length;
	while(i--){
			
	var theHomeworkDate = new Date(HOMEWORKS[i].date)	
	if((
	   (theHomeworkDate.getDate()  - this.todaysDate.getDate() == 1) &&
		 theHomeworkDate.getMonth() == this.todaysDate.getMonth()))
	   {
		this.tomorrowHomeworks.push(HOMEWORKS[i])
	   }
	else if((
		(theHomeworkDate.getDate() == 28 && theHomeworkDate.getMonth() == 3) ||
			theHomeworkDate.getDate() == 30 || theHomeworkDate.getDate() == 31)
			&& this.todaysDate.getDate() == 1)
		{
		  this.tomorrowHomeworks.push(HOMEWORKS[i])
		}
	else{
		this.upcomingHomeworks.push(HOMEWORKS[i]);
	}
	}
 }
}
