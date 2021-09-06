<script>
	import { onMount } from 'svelte';
	import { session } from '$app/stores';
	import { goto } from '$app/navigation';
	onMount(() => {
		console.log('session: ', $session);
		if (!$session.user.email) {
			goto('/login');
		}
	});
</script>
