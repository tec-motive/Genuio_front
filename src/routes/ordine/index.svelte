<script context="module">
	export async function load({ page, fetch, session, context }) {
		const url = 'http://localhost:3000/src/lib/data/ordine.json';
		const response = await fetch(url);
		const result = await response.json();
		const ordineData = result;

		return {
			props: { ordineData }
		};
	}
</script>

<script>
	import { page, session } from '$app/stores';
	export let ordineData;
</script>

<div class="flex justify-between m-4">
	<h1>Ordine</h1>
	<button class="p-2">Inserisci nuovo ordine</button>
</div>
<div class="mb-3">
	<div class="mb-3">
		<span>Produttore</span>
		<input class="ml-1 mr-4 shadow-md text-center" type="text" value="LKF" />
		<span>Date ordine</span>
		<input class="ml-1 mr-4 shadow-md text-center" type="date" />
		<span>Articolo</span>
		<input class="ml-1 mr-4 shadow-md text-center" type="text" />
		<i class="fas fa-search" />
	</div>
	<div>
		<span class="ml-1 mr-4">Stato dell'ordine</span>
		<input type="checkbox" />
		<span class="ml-1 mr-4">Ordine aggiunto</span>
		<input type="checkbox" />
		<span class="ml-1 mr-4">Ordine confermato</span>
		<input type="checkbox" />
		<span class="ml-1 mr-4">Spedizione</span>
		<input type="checkbox" />
		<span class="ml-1 mr-4">Fine richiesto</span>
		<input type="checkbox" />
		<span class="ml-1 mr-4">Fine</span>
	</div>
</div>

<table class="table-auto">
	<tr>
		<th class="border-r"><input type="checkbox" /></th>
		<th>Produttore</th>
		<th>Data ordine</th>
		<th>Data consegna</th>
		<th>Numero d'ordine</th>
		<th>Foto</th>
		<th>Articolo</th>
		<th>Quantità dell'ordine</th>
		<th>Quantità di spedizione</th>
		<th>Quantità arrivata</th>
		<th>Stato dell'ordine</th>
		<th />
	</tr>
	{#each ordineData as data, index}
		<tr>
			<td class="border-r"><input type="checkbox" /></td>
			<td class="text-sm">{data.Produttore}</td>
			<td class="text-sm">{data.Data_ordine}</td>
			<td class="text-sm">{data.Data_consegna_promiso}</td>
			<td>{data.Numero_dordine}</td>
			<td><img src={data.Foto} alt="shoes" /></td>
			<td class="text-sm">{data.Articolo}</td>
			<td>{data.Quantita_dellordine}</td>
			<td>{data.Quantita_di_spedizione}</td>
			<td>{data.Quantita_arrivata}</td>
			<td>{data.Stato_dellordine}</td>
			<td><button class="p-2">Visualizza</button></td>
		</tr>
	{/each}
</table>
<div class="flex justify-center m-5">
	<button class="m-2 px-3 py-1">1</button>
	<button class="m-2 px-3 py-1">2</button>
	<button class="m-2 px-3 py-1">3</button>
</div>
<div class="flex justify-center space-x-5">
	<button class="w-40">Esporta tutti i dati degli ordini selezionati</button>
	<button class="w-40">Aggiungi la quantità di spedizione agli ordini selezionati</button>
	<button class="w-40"
		>Inserisci xlsx file la quantità di spedizione degli ordini selezionati</button
	>
	<button class="w-40">Aggiungi la quantità arrivata agli ordini selezionati</button>
	<button class="w-40">Inserisci xlsx file la quantità arrivata degli ordini selezionati</button>
	<button class="w-40">Modifica lo stato dell'ordine selezionato in Fine richiesto</button>
	<button class="w-40">Modifica lo stato dell'ordine selezionato in Fine</button>
</div>
