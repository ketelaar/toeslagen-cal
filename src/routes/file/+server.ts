import { zorgToeslag } from "$lib/utils/ical";
import { json } from "@sveltejs/kit";

export function GET() {
    return json(zorgToeslag())
}