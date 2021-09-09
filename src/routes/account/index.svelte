<script>
	import { accountPageInfo } from '$lib/data';
</script>

<div class="m-4">
	<h1 class="mb-16">Account</h1>
	<table>
		<tr>
			<th>Numero</th>
			<th>Tipo</th>
			<th>Nome</th>
			<th>E-mail</th>
			<th>Account</th>
			<th>Password</th>
			<th />
		</tr>
		{#each accountPageInfo as account, index}
			<tr>
				<td>{account.id}</td>
				<td>{account.Tipo}</td>
				<td>{account.Nome}</td>
				<td>{account.Email}</td>
				<td>{account.Account}</td>
				<td>{account.Password}</td>
				<td><button class="p-3">Modificare</button></td>
			</tr>
		{/each}
	</table>
</div>
