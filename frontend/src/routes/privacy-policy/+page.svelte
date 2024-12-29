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
			<div class="mb-4 text-center text-3xl font-bold">Privacy and Policy</div>
			<div class="prose mx-auto space-y-4 text-justify">
				<p>
					At UniFliXsg, your privacy is important to us. This Privacy Policy explains how we
					collect, use, and protect your personal information when you use our app.
				</p>

				<h2 class="text-xl font-bold">1. Information We Collect</h2>
				<p>
					UniFliXsg stores minimal user information necessary to provide its services. Specifically,
					the following information is collected and stored:
				</p>
				<ul class="list-inside list-disc space-y-2">
					<li>
						<strong>Google Authentication Data</strong>: When you sign in using Google OAuth, we
						store your email address, name, and profile image as provided by Google. This data is
						used to personalize your experience and enable account-based features.
					</li>
					<li>
						<strong>Search History</strong>: The app saves your last ten search queries to enhance
						your experience by allowing quick access to recent searches. This data is tied to your
						account and is not shared with third parties.
					</li>
				</ul>

				<h2 class="text-xl font-bold">2. How We Use Your Information</h2>
				<p>Your information is used solely to:</p>
				<ul class="list-inside list-disc space-y-2">
					<li>Authenticate and personalize your experience using your Google profile details.</li>
					<li>Provide tailored program recommendations based on your search queries.</li>
					<li>
						Offer quick access to your recent searches by maintaining a record of the last ten
						queries.
					</li>
				</ul>

				<h2 class="text-xl font-bold">3. Third-Party Services</h2>
				<p>UniFliXsg integrates with the following third-party services:</p>
				<ul class="list-inside list-disc space-y-2">
					<li>
						<strong>Google OAuth</strong>: Used for secure authentication. We only access the basic
						profile information (email, name, and image) as provided by Google.
					</li>
					<li>
						<strong>Hugging Face (all-MiniLM-L6-v2 & all-MiniLM-L12-v2)</strong>: These models are
						used for semantic search to process and recommend undergraduate programs. The models are
						downloaded from Hugging Face, but all queries are processed via an internal API,
						ensuring that no data is shared with Hugging Face under any circumstances.
					</li>
				</ul>

				<h2 class="text-xl font-bold">4. Data Security</h2>
				<p>
					We implement industry-standard practices to ensure that your data is protected against
					unauthorized access, alteration, or destruction. However, no system is entirely secure,
					and we cannot guarantee absolute security of your data.
				</p>

				<h2 class="text-xl font-bold">5. Data Retention</h2>
				<p>
					Your Google profile data (email, name, and profile image) is retained as long as your
					account is active. Your search history is limited to the last ten records and is regularly
					overwritten as new queries are submitted.
				</p>

				<h2 class="text-xl font-bold">6. Your Consent</h2>
				<p>
					By using UniFliXsg, you consent to this Privacy Policy and the processing of your data as
					described herein. If you do not agree with these terms, please refrain from using it.
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
