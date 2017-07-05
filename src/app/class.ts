export class Period
{
	day: string;
	startTime : string;
	endTime : string;
}

export class Class {
	subject : string;
	periods : Period[];
	days : string[];
	room : string;
	color : string;
}
