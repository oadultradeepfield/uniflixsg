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
		class="container mx-auto mb-auto mt-auto flex max-w-5xl flex-col items-center justify-center px-8 py-8"
	>
		<History />
	</main>
	<footer class="footer footer-center mt-12 bg-base-200 p-6 text-base-content">
		<Footer />
	</footer>
</div>
