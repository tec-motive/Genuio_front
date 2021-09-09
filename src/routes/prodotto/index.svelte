<script>
	import { prodottoPageInfo } from '$lib/data';
</script>

<div class="mx-3 mt-4">
	<div class="flex justify-between mb-6">
		<h1>Prodotto</h1>
		<button class="p-3">Inserisci nuovo prodotto</button>
	</div>
	<span class="mr-3">Articolo</span>
	<input class="mr-3" type="text" />
	<i class="fas fa-search" />
	<table class="mt-3">
		<tr>
			<th>Numero</th>
			<th>Foto</th>
			<th>Articolo</th>
			<th>Produttore</th>
			<th>Tempo inserisci</th>
			<th>Tempo modificare</th>
			<th />
		</tr>
		{#each prodottoPageInfo as prodotto, index}
			<tr>
				<td>{prodotto.id}</td>
				<td><img src={prodotto.Foto} alt="Foto di Prodotto" /></td>
				<td>{prodotto.Articolo}</td>
				<td>{prodotto.Produttore}</td>
				<td class="text-sm">{prodotto.Tempo_inserisci}</td>
				<td class="text-sm">{prodotto.Tempo_modificare}</td>
				<td><button class="p-2">Visualizza</button></td>
			</tr>
		{/each}
	</table>
</div>
