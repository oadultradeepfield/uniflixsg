<script lang="ts">
	import { query_result, loading, search_query } from '$lib/shared.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/state';

	let apiUrl = '';

	onMount(() => {
		apiUrl = import.meta.env.VITE_API_URL;
	});

	const charLimit = 150;
	const textareaClass = $derived(
		search_query.query.length >= charLimit
			? 'textarea textarea-bordered flex h-48 w-full resize-none border-red-500 rounded-lg'
			: 'textarea textarea-bordered flex h-48 w-full resize-none rounded-lg'
	);

	function handleInput(event: Event) {
		const textarea = event.target as HTMLTextAreaElement;
		if (textarea.value.length > charLimit) {
			search_query.query = search_query.query.slice(0, charLimit);
		}
	}

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
				await fetch(`/api/create-history/`, {
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
	<div class="card-body rounded-xl border border-base-content/25 px-6 py-4">
		<div class="mb-2 text-right text-xs text-base-content/75 sm:text-sm">
			<span class={search_query.query.length > charLimit ? 'text-red-500' : ''}>
				{search_query.query.length}/{charLimit} characters
			</span>
		</div>
		<textarea
			id="search_query"
			bind:value={search_query.query}
			class={textareaClass}
			placeholder="Tell us about yourself in 20 - 30 words"
			oninput={handleInput}
			onkeydown={(e) => e.key === 'Enter' && (e.preventDefault(), submitQuery())}
		></textarea>
		<div class="mt-4 flex items-center space-x-4">
			<div class="text-left text-xs text-base-content/75 sm:text-sm">
				If you experience a delay after submitting, please kindly wait for the cold start.
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
