<script lang="ts">
	import { resolve } from '$app/paths';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import Button from './ui/button/button.svelte';

	type OnlineCalendarType = {
		name: string;
		action: () => void;
	};

	function getWebcalURI() {
		return `webcal://${window.location.host}${resolve('/toeslagen.ics')}`;
	}

	function addToAppleAgenda() {
		window.open(getWebcalURI());
	}

	function addToGoogleCalendar() {
		const calendarRoute = encodeURIComponent(getWebcalURI());
		window.open(`https://calendar.google.com/calendar/r?cid=${calendarRoute}`, '_blank');
	}

	const calendars: OnlineCalendarType[] = [
		{ name: 'Apple Agenda', action: addToAppleAgenda },
		{ name: 'Google Agenda', action: addToGoogleCalendar }
	];
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}
			<Button {...props} variant="secondary">Voeg toe aan kalender</Button>
		{/snippet}
	</DropdownMenu.Trigger>
	<DropdownMenu.Content>
		{#each calendars as { name, action } (name)}
			<DropdownMenu.Item onclick={action}>{name}</DropdownMenu.Item>
		{/each}
	</DropdownMenu.Content>
</DropdownMenu.Root>
