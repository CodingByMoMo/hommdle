<script>
	import { units } from '$lib/units';
	import { guesses, tries } from '$lib/store';
	/** @type {{type: string}} */
	let { type } = $props();
	let searchValue = $state();
	const unitsHints = units.map((unit) => {
		return unit.Name;
	});
	const herosHints = ['Crag Hack', 'Mephala'];

	/** @type{function(string): void} */
	const updateGuesses = function (value) {
		$guesses = [...$guesses, value];
	};
	/** @type{function(KeyboardEvent): void}*/
	const search = function (event) {
		if (event.code === 'Enter') {
			if (unitsHints.includes(searchValue)) updateGuesses(searchValue);
			searchValue = '';
		}
	};
</script>

<input
	type="search"
	id="search"
	list="hints"
	placeholder="Type name of a unit..."
	bind:value={searchValue}
	onkeydown={search}
/>

<datalist id="hints">
	{#if type === 'units'}
		{#each unitsHints as hint}
			{#if !$guesses.includes(hint)}
				<option value={hint}></option>
			{/if}
		{/each}
	{:else if type === 'heros'}
		{#each herosHints as hint}
			<option value={hint}></option>
		{/each}
	{/if}
</datalist>

<style>
	input {
		font-size: 1.5rem;
		padding: 10px;
		color: var(--text);
		border-radius: 24px;
		background-color: var(--bg-accent);
		width: 60%;
		border: 2px solid var(--accent-color);
	}
</style>
