<script>
	import { session } from '$app/stores';
	import { goto } from '$app/navigation';
	import { linear } from 'svelte/easing';
	import { blur, fade, fly, scale, slide } from 'svelte/transition';
	const { username, account, password, email } = $session.user;
	console.log('here session', $session.user);
	let isModificareOn = false;
	const toggleModificare = () => (isModificareOn = !isModificareOn);
	let transitionOption = { duration: 500, easing: linear };
</script>

<div class="container flex flex-col justify-center items-center space-y-20 mt-20">
	<div class="flex">
		<h1 class="pr-40">My Account</h1>
		<button class="font-semibold px-2 " on:click={toggleModificare}>Modificare</button>
	</div>
	<table>
		{#each Object.entries($session.user) as [key, value]}
			<tr>
				<th>{key}</th>
				{#if isModificareOn}
					<td>
						<input class="p-1 " type="text" {value} />
					</td>
				{:else}
					<td class="py-5 px-10">
						<p>
							{value}
						</p>
					</td>
				{/if}
			</tr>
		{/each}
	</table>
	<button class="font-semibold px-2 py-2" on:click={() => goto('/login')}>Disconnettersi</button>
</div>
