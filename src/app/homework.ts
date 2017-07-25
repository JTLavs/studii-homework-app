class Work{
	subject : string;
	date : string;
}

export class Homework extends Work{
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

export class Exam extends Work{
	name : string;
	topics : Topics[];
}
