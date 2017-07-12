import { Homework } from './homework'
import { Subject } from './homework'
import { Exam } from './exam'

export const HOMEWORKS: Homework[] = [
	{task : 'Read page 5', subject : 'Science', date : '08/09/17', details : 'Read page 5 of Science textbook to learn about the digestive system.'},
	{task : 'Answer questions 1-10', subject : 'Maths', date : '07/11/17', details : 'Answer questions 1-10 on algebraic expressions'},
	{task : 'Read page 5', subject : 'Science', date : '07/22/17', details : 'Read page 5 of Science textbook to learn about the digestive system.'},
	{task : 'Answer questions 1-10', subject : 'Maths', date : '07/10/17', details : 'Answer questions 1-10 on algebraic expressions'}	
]

export const EXAMS: Exam[] = [

]

export const SUBJECTS: Subject[] = [
	{name : 'Science', totalPercentageScores : 83, numberOfTests : 4, target : 60, image : 'iconScience'},
	{name : 'Maths', totalPercentageScores : 120, numberOfTests : 2, target : 80, image : 'iconMaths'},
	{name : 'English', totalPercentageScores : 180, numberOfTests : 2, target : 75, image : 'iconEnglish'},
	{name : 'History', totalPercentageScores : 60, numberOfTests : 1, target : 68, image : 'iconHistory'},
	{name : 'Computing', totalPercentageScores : 200, numberOfTests : 2, target : 90, image : 'iconComputing'},
];
