import ical, { ICalCalendarMethod, type ICalEventData } from 'ical-generator';

type ToeslagenYearData = {
	year: number;
	days: number[];
};

function datesFor({ year, days }: ToeslagenYearData) {
	if (days.length != 12) {
		throw new Error('Days array should have exactly 12 numbers');
	}

	// months start at 0, so fine to use index here
	return days.map((day, index) => {
		// hour 12 to make it start at the middle of the day
		return new Date(year, index, day, 12);
	});
}

const toeslagenData: ToeslagenYearData[] = [
	{ year: 2025, days: [20, 20, 20, 22, 20, 20, 21, 20, 22, 20, 20, 22] },
	{ year: 2026, days: [20, 20, 20, 20, 20, 22, 20, 20, 21, 20, 20, 21] }
];

const toeslagenDates: Date[] = toeslagenData
	.map((data) => {
		return datesFor(data);
	})
	.flat();

export function constructToeslagenCalendar() {
	const calendar = ical({ name: 'Toeslagen' });

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
		summary: 'Uitbetaling toeslagen'
	};
}
