import { constructToeslagenCalendar } from '$lib/utils/ical';

export function GET() {
	const cal = constructToeslagenCalendar();

	return new Response(cal.toString(), {
		headers: {
			'Content-Disposition': `attachment; filename=toeslagen.ics`,
			'Content-Type': 'text/calendar; charset=utf-8',
			'Cache-Control': 'max-age=0, s-maxage=31536000, stale-while-revalidate'
		},
		status: 200
	});
}
