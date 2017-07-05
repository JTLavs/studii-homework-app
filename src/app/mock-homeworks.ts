import { Homework } from './homework'
import { Subject } from './homework'
import { Exam } from './exam'
import { Class } from './class'

export const HOMEWORKS: Homework[] = [
	{task : 'Read page 5', subject : 'Science', date : '01/01/01', details : 'Read page 5 of Science textbook to learn about the digestive system.',
	image : 'iconScience'},
	{task : 'Answer questions 1-10', subject : 'Maths', date : '01/01/01', details : 'Answer questions 1-10 on algebraic expressions',
	image : 'iconMaths'},
	{task : 'Read page 5', subject : 'Science', date : '07/06/17', details : 'Read page 5 of Science textbook to learn about the digestive system.',
	image : 'iconScience'},
	{task : 'Answer questions 1-10', subject : 'Maths', date : '07/06/17', details : 'Answer questions 1-10 on algebraic expressions',
	image : 'iconMaths'}
	
]

export const CLASSES: Class[] = [
	{subject : 'Science',
	periods :
	[
		{day : 'Monday', startTime : '9:00', endTime : '10:00'},
		{day : 'Monday', startTime : '13:00', endTime : '13:00'},
		{day : 'Tuesday', startTime : '10:05', endTime : '11:35'},
		{day : 'Wednesday', startTime : '15:00', endTime : '15:30'},
		{day : 'Wednesday', startTime : '18:30', endTime : '19:00'}
	],
	days : ['Monday', 'Tuesday', 'Wednesday'],
	room : 'A1', color:'blue'
	},

	{subject : 'Maths',
	periods :
	[
	{day : 'Monday', startTime : '10:05', endTime : '10:30'},
	],
	days : ['Monday'],
	room : 'A1', color:'red'
	}
	]

export const EXAMS: Exam[] = [
	{name: 'GCSE Biology', subject : 'Science', date : '01/01/01',
	topics: [
			{topicName : 'Digestive System', status : 'Not Complete' },
			{topicName :  'Cells', status : 'Not Complete'},
			{topicName :  'Plants', status : 'Not Complete' },
			{topicName :  'Animals', status : 'Not Complete' }
		],
	stuffNeeded: 'Calculator'},

	{name : 'GCSE Chemistry', subject : 'Science', date : '01/01/01',
	topics : [
			{topicName : 'Digestive System', status : 'Not Complete' },
			{topicName :  'Cells', status : 'Not Complete'},
			{topicName :  'Plants', status : 'Not Complete' },
			{topicName :  'Animals', status : 'Not Complete' }
			],
	stuffNeeded: 'Calculator'},
	
		{name : 'GCSE Chemistry', subject : 'Science', date : '02/02/22',
	topics : [
			{topicName : 'Digestive System', status : 'Not Complete' },
			{topicName :  'Cells', status : 'Not Complete'},
			{topicName :  'Plants', status : 'Not Complete' },
			{topicName :  'Animals', status : 'Not Complete' }
			],
	stuffNeeded: 'Calculator'}
]

export const SUBJECTS: Subject[] = [
	{name : 'Science', totalPercentageScores : 83, numberOfTests : 4, target : 60, image : 'iconScience'},
	{name : 'Maths', totalPercentageScores : 120, numberOfTests : 2, target : 80, image : 'iconMaths'},
	{name : 'English', totalPercentageScores : 180, numberOfTests : 2, target : 75, image : 'iconEnglish'},
	{name : 'History', totalPercentageScores : 60, numberOfTests : 1, target : 68, image : 'iconHistory'},
	{name : 'Computing', totalPercentageScores : 200, numberOfTests : 2, target : 90, image : 'iconComputing'},
];
