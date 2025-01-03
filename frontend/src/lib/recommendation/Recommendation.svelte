<script lang="ts">
	import { loading, query_result } from '$lib/shared.svelte';
	import Skeleton from './Skeleton.svelte';
	import RecommendationCard from './RecommendationCard.svelte';

	let selectedUniversity = $state('All');
	let selectedSortKey = $state('mean_score');

	const getUniversityAcronym = (university: string) =>
		university
			.split(' ')
			.pop()
			?.replace(/[\(\)]/g, '');

	type ResultItem = {
		program_title: string;
		university: string;
		scores: { [key: string]: number };
	};

	const sortResults = (results: ResultItem[], key: string) => {
		return [...results].sort((a, b) => {
			const aScore = a.scores[key];
			const bScore = b.scores[key];
			return bScore - aScore;
		});
	};

	const filteredResults = $derived(
		sortResults(
			query_result.result.filter(
				({ university }) => selectedUniversity === 'All' || university === selectedUniversity
			),
			selectedSortKey
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
				<div class="flex items-center justify-between px-6">
					<label for="sort-filter" class="font-medium">Sort by score:</label>
					<select
						id="sort-filter"
						class="w-42 select select-bordered max-w-80 rounded-lg"
						bind:value={selectedSortKey}
					>
						<option value="university_score">University Score</option>
						<option value="mean_score">Overall Score</option>
						<option value="career_score">Career Score</option>
						<option value="program_score">Program Score</option>
					</select>
				</div>
				<div class="grid grid-cols-1 gap-6 px-6">
					{#each filteredResults as { program_title, university, scores }, i}
						<RecommendationCard {program_title} {university} {scores} {i} />
					{/each}
				</div>
			{/if}
		</div>
	{/if}
</div>
