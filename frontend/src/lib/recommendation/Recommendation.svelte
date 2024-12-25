<script lang="ts">
	import { loading, query_result } from '$lib/shared.svelte';
	import Skeleton from './Skeleton.svelte';
	import RecommendationCard from './RecommendationCard.svelte';

	let selectedUniversity = $state('All');

	const getUniversityAcronym = (university: string) =>
		university
			.split(' ')
			.pop()
			?.replace(/[\(\)]/g, '');

	const filteredResults = $derived(
		query_result.result.filter(
			({ university }) => selectedUniversity === 'All' || university === selectedUniversity
		)
	);
</script>

<div>
	{#if loading.is_loading}
		<Skeleton />
	{:else}
		<div class="flex flex-col gap-4">
			{#if filteredResults.length > 0}
				<div class="flex items-center justify-between px-6">
					<label for="university-filter" class="font-medium">Filter by university:</label>
					<select
						id="university-filter"
						class="w-42 select select-bordered max-w-80 rounded-lg"
						bind:value={selectedUniversity}
					>
						<option value="All">All</option>
						{#each Array.from(new Set(query_result.result.map(({ university }) => university))) as university}
							<option value={university}>{getUniversityAcronym(university)}</option>
						{/each}
					</select>
				</div>
				<div class="grid grid-cols-1 gap-6 px-6">
					{#each filteredResults as { program_title, university }, i}
						<RecommendationCard {program_title} {university} {i} />
					{/each}
				</div>
			{/if}
		</div>
	{/if}
</div>
