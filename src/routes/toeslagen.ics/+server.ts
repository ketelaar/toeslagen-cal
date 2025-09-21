import { constructToeslagenCalendar } from '$lib/utils/ical';

export const prerender = true;

export function GET() {
	const cal = constructToeslagenCalendar();

	return new Response(cal.toString(), {
		headers: {
			'Content-Type': 'text/calendar; charset=utf-8',
			'Cache-Control': 's-maxage=31536000, stale-while-revalidate'
		},
		status: 200
	});
}
