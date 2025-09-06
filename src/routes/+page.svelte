<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card/index';
	import { zorgToeslag } from '$lib/utils/ical';

    function saveZorgtoeslagCalendar() {
        const cal = zorgToeslag()
        console.log(cal.toJSON())
    }
</script>

<Card.Root class="mx-auto w-full max-w-sm">
	<Card.Header>
		<Card.Title>Toeslagen ICALs</Card.Title>
		<Card.Description>Links voor automatisch updatende kalenders voor toeslagen</Card.Description>
	</Card.Header>
	<Card.Content>
		<Button onclick={() => saveZorgtoeslagCalendar()}>Toeslagen 2024</Button>
	</Card.Content>
	<Card.Footer>
		<a
			href="https://www.belastingdienst.nl/wps/wcm/connect/nl/toeslagen/content/betaaldatums-toeslagen"
			class="ml-auto inline-block text-sm underline-offset-4 hover:underline"
		>
			Bron voor de datums
		</a>
	</Card.Footer>
</Card.Root>
