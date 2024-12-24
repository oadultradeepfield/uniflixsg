<script>
	import GoogleIcon from './GoogleIcon.svelte';
	import { signIn } from '@auth/sveltekit/client';
</script>

<button
	class="flex items-center gap-2 rounded-xl border border-base-content/25 bg-base-100 px-4 py-2 text-base-content transition-colors duration-200 hover:bg-base-300"
	aria-label="Sign in with Google"
	onclick={() => signIn('google')}
>
	<GoogleIcon />
	<span class="font-medium">Sign in</span>
</button>
