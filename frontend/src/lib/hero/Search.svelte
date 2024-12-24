<script lang="ts">
	import { query_result, loading, search_query } from '$lib/shared.svelte';
	import { onMount } from 'svelte';
	import { prisma } from '../../prisma';
	import { page } from '$app/state';

	let apiUrl = '';

	onMount(() => {
		apiUrl = import.meta.env.VITE_API_URL;
	});

	async function submitQuery() {
		loading.is_loading = true;

		if (!search_query.query.trim()) {
			loading.is_loading = false;
			return;
		}

		try {
			const response = await fetch(`${apiUrl}/api/recommend`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ query: search_query.query })
			});
			const result = await response.json();

			if (page?.data?.session?.user) {
				const userEmail = page.data.session.user.email!;
				console.log(page.data);
				await fetch(`/api/history/`, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ query: search_query.query, result, userEmail })
				});
			}

			query_result.result = result;
			loading.is_loading = false;
		} catch (error) {
			loading.is_loading = false;
			console.error('Error submitting query:', error);
		}
	}
</script>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/mono-icons@1.2.1/iconfont/icons.css" />
</svelte:head>

<div class="card w-full max-w-lg">
	<div class="card-body rounded-xl border border-base-content/25">
		<textarea
			id="search_query"
			bind:value={search_query.query}
			class="textarea textarea-bordered flex h-48 w-full resize-none"
			placeholder="Tell us about yourself in 20 - 30 words"
			onkeydown={(e) => e.key === 'Enter' && (e.preventDefault(), submitQuery())}
		></textarea>
		<div class="mt-4 flex items-center space-x-4">
			<div class="text-left text-xs text-base-content/75 sm:text-sm">
				If you experience a delay after submitting, try again as the backend may be inactive.
			</div>
			<button
				class="btn h-12 w-12 rounded-full bg-red-500 hover:bg-red-600"
				aria-label="Submit query"
				onclick={submitQuery}
			>
				<i class="mi mi-arrow-up text-2xl font-bold"></i>
			</button>
		</div>
	</div>
</div>
