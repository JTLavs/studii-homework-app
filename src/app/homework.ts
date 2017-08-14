export class Homework{
	subject : string;
	date : string;
	details : string;
}

export class Subject {
	name : string;
	totalPercentageScores : number;
	numberOfTests : number;
	target : number;
}

export class Link{
	href : string;
	title : string;
	website : string;
}

export class Resource {
	subject : string;
	topic : string;
	links : Link[];
}

export class Topics
{
	topicName : string;
	status : string;
}

export class Exam{
	subject : string;
	date : string;
	name : string;
	topics : Topics[];
}
