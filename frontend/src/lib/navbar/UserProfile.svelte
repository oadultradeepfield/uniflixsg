<script lang="ts">
	import { signOut } from '@auth/sveltekit/client';
	let { image, name } = $props();
</script>

<div class="dropdown dropdown-end dropdown-hover">
	<div tabindex="0" role="button" class="avatar w-9">
		<img class="rounded-full" src={image} alt={name} referrerpolicy="no-referrer" />
	</div>
	<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
	<ul tabindex="0" class="menu dropdown-content absolute w-32 rounded-xl bg-zinc-800 p-1 shadow">
		<li>
			<a
				href="/history"
				class="rounded-lg px-3 py-2 text-sm hover:bg-zinc-700"
				aria-label="View history">View history</a
			>
		</li>
		<li>
			<button
				onclick={() => signOut()}
				class="rounded-lg px-3 py-2 text-sm hover:bg-zinc-700"
				aria-label="Sign out">Sign out</button
			>
		</li>
	</ul>
</div>
