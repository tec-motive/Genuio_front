<script>
	import { jwt } from '$lib/shared/stores.js';
	import { session } from '$app/stores';
	import { goto } from '$app/navigation';
	let account = '';
	let password = '';

	async function handleLogin() {
		//fetch...
		//jwt.set('abc');
		const login = await fetch('auth/login', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				user: {
					account: account,
					password: password
				}
			})
		});
		const res = await login.json();
		console.log('res:', res);
		$session.user = res.user;
		goto('/');
	}
</script>

<div class="h-2 bg-black" />

<div class="container mx-auto p-8">
	<div class="mx-auto max-w-sm">
		<div class="py-10 text-center" />

		<!-- ... -->

		<div class="bg-white rounded shadow">
			<div class="border-b py-8 font-bold text-black text-center text-xl tracking-widest uppercase">
				GENUIO SCM
			</div>

			<form class="bg-gray-100 px-10 py-10">
				<div class="mb-3">
					<input
						class="border w-full p-3"
						name="email"
						type="text"
						placeholder="E-Mail"
						bind:value={account}
					/>
				</div>
				<div class="mb-6">
					<input
						class="border w-full p-3"
						name="password"
						type="password"
						placeholder="**************"
						bind:value={password}
					/>
				</div>
				<div class="flex">
					<button
						class="hover:bg-gray-800 w-full p-4 text-sm text-white uppercase font-bold tracking-wider bg-black"
						on:click|preventDefault={handleLogin}
					>
						Login
					</button>
				</div>
			</form>

			<div class="border-t px-6 py-6">
				<div class="flex justify-between">
					<a href="#" class="font-bold text-black hover:text-gray-800 no-underline">Questions?</a>
					<a href="#" class="text-blue-900 hover:text-black no-underline"
						>Email to yulduck.sung@genu.io</a
					>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
</style>
