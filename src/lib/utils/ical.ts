import ical, { ICalCalendarMethod, type ICalEventData } from 'ical-generator';

export function zorgToeslag() {
	const calendar = ical({ name: 'Kalender voor Zorgtoeslag' });

	calendar.method(ICalCalendarMethod.REQUEST);

	const startTime = new Date();
	const secondDate = new Date();
	secondDate.setFullYear(2025, 9, 8)

	calendar.createEvent(standardToeslagenEventData(startTime));
	calendar.createEvent(standardToeslagenEventData(secondDate));

	return calendar;
}

function standardToeslagenEventData(day: Date): ICalEventData {
	return {
		start: day,
		end: day,
		allDay: true,
		summary: 'Toeslagen'
	};
}
