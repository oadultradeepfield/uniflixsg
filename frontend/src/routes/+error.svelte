<script lang="ts">
	import Footer from '$lib/footer/Footer.svelte';
	import Navbar from '$lib/navbar/Navbar.svelte';
</script>

<div class="flex h-screen flex-col">
	<header class="border-b border-base-content/25 bg-base-200">
		<Navbar />
	</header>
	<main class="container mx-auto my-auto flex flex-col items-center justify-center px-4">
		<h1 class="mb-4 font-mono text-3xl font-bold">404 - Page Not Found</h1>
		<div class="text-base-content-100 text-md mb-6 text-center">
			Oops! The page you are looking for doesn't exist.
		</div>
		<a href="/" class="btn btn-outline btn-secondary rounded-lg">Return to home</a>
	</main>
	<footer class="footer footer-center mt-12 bg-base-200 p-6 text-base-content">
		<Footer />
	</footer>
</div>
