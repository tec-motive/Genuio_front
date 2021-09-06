<script>
	import '../app.postcss';
	// import '../css/tailwind.css';
	import Nav from '$lib/Nav.svelte';
</script>

<svelte:head />
<main>
	<div class="flex flex-wrap bg-gray-100 w-full h-screen">
		<div class="w-3/12 bg-white rounded p-3 shadow-lg">
			<Nav />
		</div>
		<div class="w-9/12">
			<div class="p-4 text-gray-500">
				<slot />
			</div>
		</div>
	</div>
</main>
<slot />

<style global="">
</style>
