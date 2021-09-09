<script>
	import '../app.postcss';
	// import '../css/tailwind.css';
	import Nav from '$lib/Nav.svelte';
</script>

<svelte:head />
<main>
	<div class="flex flex-wrap bg-gray-100 w-full h-screen">
		<div class="w-1/5 bg-white rounded p-3 shadow-lg">
			<Nav />
		</div>
		<div class="w-4/5">
			<div class="p-4 text-gray-500">
				<slot />
			</div>
		</div>
	</div>
</main>

<style global="">
</style>
