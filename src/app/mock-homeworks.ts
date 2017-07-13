import { Homework } from './homework'
import { Subject, Resource } from './homework'
import { Exam } from './exam'

export const HOMEWORKS: Homework[] = [
	{task : 'Read page 5', subject : 'Science', date : '08/09/17', details : 'Read page 5 of Science textbook to learn about the digestive system.'},
	{task : 'Answer questions 1-10', subject : 'Maths', date : '07/11/17', details : 'Answer questions 1-10 on algebraic expressions'},
	{task : 'Read page 5', subject : 'Science', date : '07/22/17', details : 'Read page 5 of Science textbook to learn about the digestive system.'},
	{task : 'Answer questions 1-10', subject : 'Maths', date : '07/10/17', details : 'Answer questions 1-10 on algebraic expressions'}	
]

export const EXAMS: Exam[] = [

]

export const RESOURCES : Resource[] = [
		{subject : 'History', topic: 'Roman Empire', 
			links : [{href: 'ancient.eu/Roman_Empire/', title : 'Roman Empire'}]
		},
		{subject : 'History', topic: 'World War 2', 
			links : [ {href : 'world-war-2.info/', title : 'World War 2'}]
		},
		{subject : 'History', topic: 'Ancient Egypt', 
			links : [{href : 'ancientegypt.co.uk/menu.html', title : 'Ancient Egypt'}]},
		{subject : 'Science', topic: 'Atoms', 
			links : [{href : 'livescience.com/37206-atom-definition.html', title: 'What is an Atom?'},
				{href : 'theguardian.com/science/life-and-physics/2011/mar/17/1', title : 'Electrons'},
				{href : 'hyperphysics.phy-astr.gsu.edu/hbase/Particles/proton.html', title : 'Protons and Neutrons'}]},
		{subject : 'Science', topic: 'Space', 
			links : [{href : 'nineplanets.org/', title : 'Planets'},
				{href : 'science.nasa.gov/astrophysics/focus-areas/black-holes', title : 'Black Holes'},
				{href : 'space.com/57-stars-formation-classification-and-constellations.html', title : 'Stars'},
				{href : 'nationalcoldwarexhibition.org/schools-colleges/national-curriculum/space-race/', title : 'The Space Race'}]},
		{subject : 'Science', topic: 'Forces', 
		 links : [{href : 'physicsclassroom.com/class/newtlaws/', title : 'Types of Forces & Newtons Laws'},
				{href : 'livescience.com/37115-what-is-gravity.html', title : 'The Force of Gravity'}]}		
]

export const SUBJECTS: Subject[] = [
	{name : 'Science', totalPercentageScores : 83, numberOfTests : 4, target : 60, image : 'iconScience'},
	{name : 'Maths', totalPercentageScores : 120, numberOfTests : 2, target : 80, image : 'iconMaths'},
	{name : 'English', totalPercentageScores : 180, numberOfTests : 2, target : 75, image : 'iconEnglish'},
	{name : 'History', totalPercentageScores : 60, numberOfTests : 1, target : 68, image : 'iconHistory'},
	{name : 'Computing', totalPercentageScores : 200, numberOfTests : 2, target : 90, image : 'iconComputing'},
];
