<script lang="ts">
	import DarkModeToggle from '$lib/components/darkModeToggle.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card/index';
</script>

<Card.Root class="mx-auto w-full max-w-sm md:scale-200">
	<Card.Header>
		<Card.Title>Toeslagen ICAL</Card.Title>
		<Card.Description
			>Link voor een automatisch updatende kalender met datums voor uitbetaling van toeslagen</Card.Description
		>
	</Card.Header>
	<Card.Content>
		<Button href="/file">Toeslagen ICAL</Button>
	</Card.Content>
	<Card.Footer>
		<DarkModeToggle />
		<a
			href="https://www.belastingdienst.nl/wps/wcm/connect/nl/toeslagen/content/betaaldatums-toeslagen"
			class="ml-auto inline-block text-sm underline-offset-4 hover:underline"
		>
			Bron voor de datums
		</a>
	</Card.Footer>
</Card.Root>
