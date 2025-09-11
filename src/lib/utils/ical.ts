import ical, { ICalCalendarMethod, type ICalEventData } from 'ical-generator';

const toeslagenDates: Date[] = [
	// months start at 0

	// hour 12 to make it start at the middle of the day
	new Date(2025, 0, 20, 12),
	new Date(2025, 1, 20, 12),
	new Date(2025, 2, 20, 12),
	new Date(2025, 3, 22, 12),
	new Date(2025, 4, 20, 12),
	new Date(2025, 5, 20, 12),
	new Date(2025, 6, 21, 12),
	new Date(2025, 7, 20, 12),
	new Date(2025, 8, 22, 12),
	new Date(2025, 9, 20, 12),
	new Date(2025, 10, 20, 12),
	new Date(2025, 11, 22, 12)
];

export function constructToeslagenCalendar() {
	const calendar = ical({ name: 'Kalender voor Zorgtoeslag' });

	calendar.method(ICalCalendarMethod.REQUEST);

	toeslagenDates.forEach((date) => {
		calendar.createEvent(standardToeslagenEventData(date));
	});

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
