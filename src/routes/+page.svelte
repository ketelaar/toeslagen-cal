<script lang="ts">
	import DarkModeToggle from '$lib/components/darkModeToggle.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card/index';
	import Copy from '@lucide/svelte/icons/copy';
	import Check from '@lucide/svelte/icons/check';
	import { fade } from 'svelte/transition';

	let isPlayingCopyAnimation = $state(false);

	function copyToClipboard() {
		if (isPlayingCopyAnimation) {
			return;
		}

		isPlayingCopyAnimation = true;
		navigator.clipboard.writeText(`${location.origin}/file`);
		setTimeout(() => {
			isPlayingCopyAnimation = false;
		}, 2000);
	}
</script>

<Card.Root class="mx-auto w-full max-w-sm md:scale-200">
	<Card.Header>
		<Card.Title>Toeslagen ICAL</Card.Title>
		<Card.Description
			>Link voor een automatisch updatende kalender met datums voor uitbetaling van toeslagen</Card.Description
		>
	</Card.Header>
	<Card.Content>
		<div class="flex gap-1">
			<Button variant="secondary" href="/file">Toeslagen .ics bestand</Button>
			<Button
				size="icon"
				onclick={copyToClipboard}
				aria-label="Kopieer link voor het .ics bestand naar het klembord"
			>
				{#if isPlayingCopyAnimation}
					<div in:fade>
						<Check />
					</div>
				{:else}
					<div in:fade>
						<Copy />
					</div>
				{/if}
			</Button>
		</div>
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
