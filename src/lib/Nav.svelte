<script lang="ts">
	import { name } from '$lib/shared/stores';
	import { base } from '$app/paths';
	import { getStores, navigating, page, session } from '$app/stores';
	import NavButton from './NavButton.svelte';
	import { navButtonList } from './data';
	name.set($session.user.username);
</script>

<div class="flex items-center space-x-4 p-2 mb-5">
	<img
		class="h-12 rounded-full"
		src="https://genu.io/wp-content/uploads/2019/07/genuio_logo.jpg"
		alt="James Bhatta"
	/>
	<div>
		<h4 class="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">
			GENUIO SCM
		</h4>
		{$name}
	</div>
</div>
<ul class="space-y-2 text-sm">
	{#each navButtonList as listElement, index}
		<NavButton
			buttonName={listElement.name}
			link={listElement.link}
			svgPathD={listElement.svgPathD}
		/>
	{/each}
</ul>
