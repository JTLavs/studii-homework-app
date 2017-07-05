export class Topics
{
	topicName : string;
	status : string;
}

export class Exam {
	name : string;
	subject : string;
	date : string;
	stuffNeeded : string;
	topics : Topics[];
}
