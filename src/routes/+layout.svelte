<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher } from 'mode-watcher';
	import { injectSpeedInsights } from '@vercel/speed-insights';

	let { children } = $props();
	injectSpeedInsights();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>


<ModeWatcher></ModeWatcher>
<div class="flex h-screen w-full items-center justify-center px-4">
{@render children?.()}
</div>

