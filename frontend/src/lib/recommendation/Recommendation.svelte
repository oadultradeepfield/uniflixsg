<script lang="ts">
	import { loading, query_result } from '$lib/shared.svelte';
	import Skeleton from './Skeleton.svelte';
	import RecommendationCard from './RecommendationCard.svelte';
</script>

<div>
	{#if loading.is_loading}
		<Skeleton />
	{:else}
		<div class="grid grid-cols-1 gap-6 px-6">
			{#each query_result.result as { program_title, university }, i}
				<RecommendationCard {program_title} {university} {i} />
			{/each}
		</div>
	{/if}
</div>
