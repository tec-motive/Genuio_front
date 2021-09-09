<script context="module">
	import { API } from '$lib/api';
	export async function load({ page, fetch, session, context }) {
		const response = await fetch(API.MIO_ACCOUNT);
		const result = await response.json();
		const mioAccountData = result;
		return {
			props: { mioAccountData }
		};
	}
</script>

<script lang="ts">
	import { goto } from '$app/navigation';
	import { postFetch } from '$lib/fetch';
	export let mioAccountData: object;
	let isModificareOn: boolean = false;

	const toggleModificare = () => (isModificareOn = !isModificareOn);
	const updateAccount = () => {
		console.log(updateData);
		postFetch(updateData, API);
		toggleModificare();
	};

	let updateData = mioAccountData;

	console.log('updateData', updateData);
</script>

<div class="container flex flex-col justify-center items-center space-y-20 mt-20">
	<div class="flex">
		<h1 class="pr-40">My Account</h1>
		{#if isModificareOn}
			<button class="font-semibold px-7" on:click={updateAccount}>Salva</button>
		{:else}
			<button class="font-semibold px-2 " on:click={toggleModificare}>Modificare</button>
		{/if}
	</div>
	<table>
		{#each Object.entries(mioAccountData) as [key, value]}
			<tr>
				<th>{key}</th>
				{#if isModificareOn}
					<td>
						<input class="p-1 " type="text" bind:value={updateData[key]} />
					</td>
				{:else}
					<td class="py-5 px-10">
						<p>{value}</p>
					</td>
				{/if}
			</tr>
		{/each}
	</table>
	<button class="font-semibold px-2 py-2" on:click={() => goto('/login')}>Disconnettersi</button>
</div>
