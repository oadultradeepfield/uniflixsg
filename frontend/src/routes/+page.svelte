<script lang="ts">
	import Footer from '$lib/footer/Footer.svelte';
	import Hero from '$lib/hero/Hero.svelte';
	import Navbar from '$lib/navbar/Navbar.svelte';
	import Recommendation from '$lib/recommendation/Recommendation.svelte';
</script>

<div class="flex h-screen flex-col">
	<header class="border-b border-base-content/25 bg-base-200">
		<Navbar />
	</header>
	<main class="container mx-auto mb-auto mt-auto flex flex-col items-center justify-center px-4">
		<section class="py-6"><Hero /></section>
		<section class="py-6"><Recommendation /></section>
	</main>
	<footer class="footer footer-center mt-12 bg-base-200 p-6 text-base-content">
		<Footer />
	</footer>
</div>
