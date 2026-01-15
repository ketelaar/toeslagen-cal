<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import Button from './ui/button/button.svelte';

	type CalendarOption = {
		name: string;
		action: () => void;
	};

	function addToAppleCalendar() {
		console.log('Apple');
	}

	function addToGoogleCalendar() {
		console.log('Google');
	}

	function addToOutlook() {
		console.log('Outlook');
	}

	const calendarOptions: CalendarOption[] = [
		{
			name: 'Apple Agenda',
			action: addToAppleCalendar
		},
		{
			name: 'Google Agenda',
			action: addToGoogleCalendar
		},
		{
			name: 'Microsoft Outlook',
			action: addToOutlook
		}
	];
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		<Button variant="secondary">Voeg toe aan kalender</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content>
		<DropdownMenu.Group>
			{#each calendarOptions as option (option.name)}
				<DropdownMenu.Item onclick={option.action}>
					{option.name}
				</DropdownMenu.Item>
			{/each}
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
