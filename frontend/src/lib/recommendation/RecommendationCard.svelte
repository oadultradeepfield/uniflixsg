<script lang="ts">
	let { program_title, university, i } = $props();
	let university_abbreviation: string = $derived.by(() => {
		let processed = university.toLowerCase();
		let lastElement = processed.split(' ').pop() || '';
		return `${lastElement.replace(/[()]/g, '')}`;
	});
	let image_src: string = $derived(`${university_abbreviation}.webp`);
	let card_url: string = $derived(`https://www.${university_abbreviation}.edu.sg`);
	let ranking: string = $derived.by(() => {
		return i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i + 1}.`;
	});
</script>

<a href={card_url} target="_blank" rel="noopener noreferrer">
	<div
		class="flex h-36 w-full max-w-xl space-x-2 overflow-hidden rounded-xl bg-zinc-800 shadow-md transition-all duration-300 hover:scale-105"
	>
		<div class="h-36 w-36 flex-shrink-0">
			<img src={image_src} alt={university} class="h-full w-full object-cover" />
		</div>
		<div class="flex flex-1 flex-col justify-center p-3">
			<h3 class="line-clamp-2 text-lg font-semibold leading-tight">
				{ranking}
				{program_title}
			</h3>
			<p class="mt-1 text-base">
				{university}
			</p>
		</div>
	</div>
</a>
