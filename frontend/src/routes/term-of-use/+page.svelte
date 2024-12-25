<script lang="ts">
	import Footer from '$lib/footer/Footer.svelte';
	import Navbar from '$lib/navbar/Navbar.svelte';
</script>

<div class="flex h-screen flex-col">
	<header class="border-b border-base-content/25 bg-base-200">
		<Navbar />
	</header>
	<main
		class="container mx-auto mb-auto flex max-w-5xl flex-col items-center justify-center px-8 py-8"
	>
		<div class="flex w-full flex-grow flex-col space-y-4">
			<div class="mb-4 text-center text-3xl font-bold">Terms of Use</div>
			<div class="prose mx-auto space-y-4 text-justify">
				<p>
					Welcome to UniFliXsg! By accessing or using our app, you agree to be bound by these Terms
					of Use. Please read them carefully before using the app. If you do not agree with these
					terms, you should not use the app.
				</p>

				<h2 class="text-xl font-bold">1. Acceptance of Terms</h2>
				<p>
					By accessing and using UniFliXsg, you acknowledge that you have read, understood, and
					agree to comply with these Terms of Use. These terms constitute a binding agreement
					between you and UniFliXsg.
				</p>

				<h2 class="text-xl font-bold">2. Use of the App</h2>
				<p>
					You agree to use UniFliXsg solely for its intended purpose of recommending undergraduate
					programs in Singapore. You are prohibited from:
				</p>
				<ul class="list-inside list-disc space-y-2">
					<li>Using the app for any unlawful or unauthorized purpose.</li>
					<li>Attempting to gain unauthorized access to the app, its database, or servers.</li>
				</ul>

				<h2 class="text-xl font-bold">3. User Responsibilities</h2>
				<p>As a user of UniFliXsg, you are responsible for:</p>
				<ul class="list-inside list-disc space-y-2">
					<li>
						Ensuring that the information you provide during Google OAuth authentication is accurate
						and up-to-date.
					</li>
					<li>
						Maintaining the confidentiality of your account credentials and ensuring their proper
						use.
					</li>
					<li>
						Using the app in a manner that respects the rights of other users and complies with
						applicable laws.
					</li>
				</ul>
				<h2 class="text-xl font-bold">4. Limitation of Liability</h2>
				<p>
					UniFliXsg is provided on an "as-is" basis without warranties of any kind, either express
					or implied. The app does not guarantee the accuracy or completeness of its
					recommendations. By using the app, you agree that the creator is not liable for:
				</p>
				<ul class="list-inside list-disc space-y-2">
					<li>
						Any errors or omissions in the program recommendations or career prospect analysis.
					</li>
					<li>
						Any direct, indirect, incidental, or consequential damages resulting from the use or
						inability to use the app.
					</li>
				</ul>

				<h2 class="text-xl font-bold">5. Third-Party Links and Services</h2>
				<p>
					UniFliXsg may include links to third-party websites, such as the Hugging Face model page,
					or integrate third-party services like Google OAuth. These third-party services are
					governed by their own terms and policies, and UniFliXsg is not responsible for their
					content or practices.
				</p>

				<h2 class="text-xl font-bold">6. Changes to the Terms</h2>
				<p>
					We reserve the right to update or modify these Terms of Use at any time. Changes will be
					effective immediately upon being posted on this page. Your continued use of the app
					constitutes your acceptance of these changes.
				</p>

				<h2 class="text-xl font-bold">7. Termination</h2>
				<p>
					UniFliXsg reserves the right to suspend or terminate your access to the app at any time,
					with or without cause, if you violate these Terms of Use or engage in any conduct deemed
					harmful to the app or its users.
				</p>
			</div>
		</div>
	</main>
	<div class="bg-base-200">
		<footer class="footer mx-auto max-w-5xl p-10 text-sm text-base-content">
			<Footer />
		</footer>
	</div>
</div>
