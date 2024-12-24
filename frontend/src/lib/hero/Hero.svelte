<script lang="ts">
	import Search from './Search.svelte';
</script>

<div class="hero px-2">
	<div class="hero-content flex flex-col text-center">
		<div class="flex items-center justify-center space-x-4">
			<img
				class="transition-transform hover:scale-105 hover:drop-shadow-[0_2px_5px_rgba(255,255,255,0.25)]"
				src="logo.png"
				alt="UniFliXsg logo"
				width="60"
			/>
			<h1 class="text-5xl font-bold text-red-400">UniFliXsg</h1>
		</div>
		<p class="max-w-md py-6">
			Discover Your Perfect Undergraduate Program in Singapore with AI-Powered Matching! P.S. Only
			single major programs will be shown. 😉
		</p>
		<Search />
	</div>
</div>
