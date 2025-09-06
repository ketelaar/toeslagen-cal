import ical, { ICalCalendarMethod, type ICalEventData } from 'ical-generator';

export function zorgToeslag() {
	const calendar = ical({ name: 'Kalender voor Zorgtoeslag' });

	calendar.method(ICalCalendarMethod.REQUEST);

	const startTime = new Date();

	calendar.createEvent(standardToeslagenEventData(startTime));

	return calendar;
}

function standardToeslagenEventData(day: Date): ICalEventData {
    return {
        start: day,
        end: day,
        allDay: true,
        summary: 'Toeslagen'
    }
}
