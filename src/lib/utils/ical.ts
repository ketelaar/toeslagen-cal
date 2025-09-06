import ical, { ICalCalendarMethod } from 'ical-generator';

export function zorgToeslag() {
	const calendar = ical({ name: 'Kalender voor Zorgtoeslag' });

	calendar.method(ICalCalendarMethod.REQUEST);

	const startTime = new Date();

	calendar.createEvent({
		start: startTime,
		end: startTime,
		allDay: true,
		summary: 'Uitbetaling zorgtoeslag'
	});

	return calendar;
}
