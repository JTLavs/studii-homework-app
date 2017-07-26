import { Homework, Subject, Resource, Exam } from './homework'

export const HOMEWORKS: Homework[] = [
	{"subject" : "chemistry", "date" : "08/09/17", "details" : "Read page 5 of Science textbook to learn about the digestive system"},
	{"subject" : "maths", "date" : "07/11/17", "details" : "Answer questions 1-10 on algebraic expressions"},
	{"subject" : "physics", "date" : "07/22/17", "details" : "Research Jupiter and its orbit"},
	{"subject" : "maths", "date" : "12/08/17", "details" : "Complete Matrices questions"}	
]

export const EXAMS: Exam[] = [
	{name : 'GCSE', subject: 'Physics', date : '10/10/17', topics : []}
]

export const RESOURCES : Resource[] = [
		{"subject" : "history", "topic": "The Roman Empire", 
			"links" : [{"website" : "ancient.eu", "href": "http://ancient.eu/Roman_Empire/" , "title" : "Roman Empire"}]},
		{"subject" : "history", "topic": "World War 2", 
			"links" : [{"website" : "world-war-2.info", "href" : "http://world-war-2.info/", "title" : "World War 2"},
					 {"website" : "wikipedia.org", "href": "https://en.wikipedia.org/wiki/World_War_2", "title" : "Wikipedia - World War 2"}]},
		{"subject" : "history", "topic": "Ancient Egypt", 
			"links" : [{"website" : "ancientegypt.co.uk", "href" : "ancientegypt.co.uk/menu.html", "title" : "Ancient Egypt"},
					 {"website" : "ancient.eu", "href" : "http://www.ancient.eu/egypt/", "title" : "Ancient Egypt"}]},
		{"subject" : "chemistry", "topic": "Atoms and sub-atomic particles", 
			"links" : [{"website" : "livescience.com", "href" : "https://www.livescience.com/37206-atom-definition.html", "title": "Atoms and their structure"}]},
		{"subject" : "physics", topic: "Space", 
			"links" : [{"website" : "nineplanets.org", "href" : "https://nineplanets.org/", "title" : "The Solar System"},
				     {"website" : "science.nasa.gov", "href" : "science.nasa.gov/astrophysics/focus-areas/black-holes", "title" : "All about Black Holes"},
				     {"website" : "space.com", "href" : "space.com/57-stars-formation-classification-and-constellations.html", "title" : "Formation of stars"},
				     {"website" : "nationalcoldwarexhibition.org", "href" : "nationalcoldwarexhibition.org/schools-colleges/national-curriculum/space-race/", "title" : "The Space Race"}]},
		{"subject" : "physics", "topic": "Forces", 
			"links" : [{website: "physicsclassroom.com", "href" : "physicsclassroom.com/class/newtlaws/", "title" : "Types of Forces & Newtons Laws"},
				  {"website" : "livescience.com", "href" : "livescience.com/37115-what-is-gravity.html", "title" : "Gravitational Force"}]},
		{"subject" : "chemistry", "topic" : "Elements & Compounds",
			"links" : [{"website": "ptable.com", href : "ptable.com", title: "Interactive Periodic Table"}]},
		{"subject": "computing", topic : 'Algorithms', 
			links : [{website : "", href : "", title : "What is an Algorithm?"}]},
		{subject : "computing", topic : "World Wide Web", 
			links : [{"website" : "webfoundation.org", "href" : "http://webfoundation.org/about/vision/history-of-the-web/", "title" : "The beginning of the World Wide Web"}]},
		{subject : "computing", topic : "Inside a Computer", 
			links : [{website : "gclearnfree.org", href : "https://www.gcflearnfree.org/computerbasics/understanding-operating-systems/1/", "title" : "Operating Systems"},
					 {website : "", href : "", title : "Storage"}]},
		{subject: "computing", topic : "The History of Computing", 
			links : [{website : "iwm.org.uk", "href" : "http://www.iwm.org.uk/history/how-alan-turing-cracked-the-enigma-code", "title" : "Alan Turing & the Enigma"}]}
]

export const SUBJECTS: Subject[] = [
	{"name" : "physics", "totalPercentageScores" : 83, "numberOfTests" : 4, "target" : 60},
	{"name" : "maths", "totalPercentageScores" : 120, "numberOfTests" : 2, "target" : 80},
	{"name" : "english", "totalPercentageScores" : 180, "numberOfTests" : 2, "target" : 75},
	{"name" : "history", "totalPercentageScores" : 60, "numberOfTests" : 1, "target" : 68},
	{"name" : "computing", "totalPercentageScores" : 200, "numberOfTests" : 2, "target" : 90},
	{"name" : "chemistry", "totalPercentageScores" : 200, "numberOfTests" : 2, "target" : 90}
];
