import { zorgToeslag } from '$lib/utils/ical';

export function GET() {
	const cal = zorgToeslag();

	return new Response(cal.toString(), {
		headers: {
			'Content-Disposition': `attachment; filename=toeslagen.ics`,
			'Content-Type': 'text/calendar; charset=utf-8'
		},
		status: 200
	});
}
