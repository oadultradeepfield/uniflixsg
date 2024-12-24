<script lang="ts">
	import { onMount } from 'svelte';
	import AccordionGroup from './AccordionGroup.svelte';
	import { page } from '$app/state';

	let responseGroups = $state([]);

	onMount(async () => {
		try {
			const userEmail = page.data.session?.user?.email!;
			const response = await fetch(`/api/get-history?userEmail=${encodeURIComponent(userEmail)}`);
			if (!response.ok) {
				throw new Error('Failed to fetch data');
			}
			responseGroups = await response.json();
		} catch (err) {
			console.error(err);
		}
	});
</script>

{#if responseGroups.length === 0}
	<p class="py-4 text-center text-gray-600">You don't have any records yet.</p>
{:else}
	<div class="flex w-full flex-grow flex-col space-y-4">
		<div class="mb-4 text-center text-3xl font-bold">Your Recent Searches</div>
		{#each responseGroups as group, index}
			<AccordionGroup {group} {index} />
		{/each}
	</div>
{/if}
