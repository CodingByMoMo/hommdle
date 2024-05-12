<script>
	import { units } from '$lib/units';
	/** @type {{onkeydown: function(KeyboardEvent,String): void, type: string, guesses: string[]}} */
	let { onkeydown, guesses, type } = $props();
	let searchValue = $state();
	const unitsHints = units.map((unit) => {
		return unit.Name;
	});
	const herosHints = ['Crag Hack', 'Mephala'];
</script>

<input
	type="search"
	id="search"
	list="hints"
	placeholder="Type name of a unit..."
	bind:value={searchValue}
	onkeydown={(event) => {
		onkeydown(event, searchValue);
		searchValue = '';
	}}
/>

<datalist id="hints">
	{#if type === 'units'}
		{#each unitsHints as hint}
			{#if !guesses.includes(hint)}
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
		padding: 8px;
		color: #fdfdfd;
		border-radius: 24px;
		background-color: #453d58;
		width: 60%;
		border: 2px solid #060508;
	}
</style>
