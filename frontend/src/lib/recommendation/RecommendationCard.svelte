<script lang="ts">
	let { program_title, university, scores, i } = $props();
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
	let university_score = $derived((scores.university_score * 100).toFixed(0) + '%');
	let mean_score = $derived((scores.mean_score * 100).toFixed(0) + '%');
	let program_score = $derived((scores.program_score * 100).toFixed(0) + '%');
	let career_score = $derived((scores.career_score * 100).toFixed(0) + '%');
</script>

<a href={card_url} target="_blank" rel="noopener noreferrer">
	<div
		class="flex h-auto w-full max-w-3xl space-x-2 overflow-hidden rounded-xl bg-zinc-800 shadow-md transition-all duration-300 hover:scale-105"
	>
		<div class="h-auto w-40 flex-shrink-0">
			<img src={image_src} alt={university} class="h-full w-full object-cover" />
		</div>
		<div class="flex flex-1 flex-col justify-center p-3">
			<h3 class="text-md line-clamp-3 font-semibold leading-tight sm:text-lg">
				{ranking}
				{program_title}
			</h3>
			<p class="mt-1 text-base">
				{university}
			</p>
			<div class="stats stats-vertical md:stats-horizontal mt-4">
				<div class="stat">
					<div class="stat-title text-sm">Overall</div>
					<div class="stat-value text-lg">{mean_score}</div>
				</div>
				<div class="stat">
					<div class="stat-title text-sm">Program</div>
					<div class="stat-value text-lg">{program_score}</div>
				</div>
				<div class="stat">
					<div class="stat-title text-sm">Career</div>
					<div class="stat-value text-lg">{career_score}</div>
				</div>
				<div class="stat">
					<div class="stat-title text-sm">University</div>
					<div class="stat-value text-lg">{university_score}</div>
				</div>
			</div>
		</div>
	</div>
</a>
