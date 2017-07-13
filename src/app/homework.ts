export class Homework {
	task : string;
	subject : string;
	date : string;
	details : string;
}

export class Subject {
	name : string;
	totalPercentageScores : number;
	numberOfTests : number;
	target : number;
	image : string;
}

export class Link{
	href : string;
	title : string;
}

export class Resource {
	subject : string;
	topic : string;
	links : Link[];
}
