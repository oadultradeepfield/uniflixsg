<script>
	import { loading, query_result } from '$lib/shared.svelte';
	import Skeleton from './Skeleton.svelte';
</script>

<div class="mt-8">
	{#if loading.is_loading}
		<Skeleton />
	{:else}{/if}
</div>
