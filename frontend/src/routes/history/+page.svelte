<script lang="ts">
	import Footer from '$lib/footer/Footer.svelte';
	import History from '$lib/history/History.svelte';
	import Navbar from '$lib/navbar/Navbar.svelte';
</script>

<div class="flex h-screen flex-col">
	<header class="border-b border-base-content/25 bg-base-200">
		<Navbar />
	</header>
	<main
		class="container mx-auto mb-12 mt-auto flex max-w-5xl flex-col items-center justify-center px-8 py-8"
	>
		<History />
	</main>
	<div class="bg-base-200">
		<footer class="footer mx-auto max-w-5xl p-10 text-sm text-base-content">
			<Footer />
		</footer>
	</div>
</div>
