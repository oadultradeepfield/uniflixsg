<script>
	import SignInButton from './SignInButton.svelte';
	import { page } from '$app/state';
	import UserProfile from './UserProfile.svelte';
	const image = $derived(page.data.session?.user?.image);
	const name = $derived(page.data.session?.user?.name);
</script>

<div class="navbar mx-auto max-w-5xl px-4">
	<div class="flex-1">
		<a class="text-2xl font-bold text-red-400" href="/">UniFliXsg</a>
	</div>
	<div class="flex-none">
		{#if page?.data?.session?.user}
			<UserProfile {image} {name} />
		{:else}
			<SignInButton />
		{/if}
	</div>
</div>
