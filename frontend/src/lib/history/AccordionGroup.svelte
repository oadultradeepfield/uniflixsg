<script lang="ts">
	let { group, index } = $props();
	const medalEmojis = ['🥇', '🥈', '🥉'];
</script>

<div class="collapse collapse-arrow rounded-lg bg-zinc-700">
	<input type="radio" name="accordion-group" id={`accordion-${index}`} />
	<div class="collapse-title text-lg font-medium transition-colors duration-200 hover:bg-zinc-600">
		{group.responsesName}
	</div>
	<div class="collapse-content">
		<ol class="space-y-4">
			{#each group.responses as response, i}
				<li>
					<span class="text-lg font-bold">
						{#if i < 3}
							{medalEmojis[i]}
						{:else}
							{i + 1}.
						{/if}
						{response.program_title}
					</span>
					<br />
					<span class="text-base-content/80">{response.university}</span>
				</li>
			{/each}
		</ol>
	</div>
</div>
