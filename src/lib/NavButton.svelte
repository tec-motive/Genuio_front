<script lang="ts">
	import { page } from '$app/stores';
	export let buttonName: string;
	export let link: string;
	export let svgPathD: string;
</script>

<li>
	<a
		href={link}
		class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
		class:bg-gray-200={$page.path === link}
	>
		<span class="text-gray-600">
			<svg
				class="h-5"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={svgPathD} />
			</svg>
		</span>
		<span>{buttonName}</span>
	</a>
</li>
