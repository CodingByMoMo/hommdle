<script>
	import GuessList from '$lib/GuessList.svelte';
	import SearchBar from '$lib/SearchBar.svelte';
	import { units } from '../lib/units';

	const rand = Math.floor(Math.random() * units.length);
	const MAX_TRIES = 5;
	const CURRENT = units[rand];

	let tries = $state(0);
	/** @type{String[] } */
	let triesList = $state([]);

	/** @type{function(String): void}*/
	function onsearch(value) {
		console.log(value);
		tries += 1;
		triesList.push(value);
		//search for the units or herose
	}
</script>

<div class="header">
	<h1>Guess the unit of the day!</h1>
</div>
<div class="search-container">
	<div class="tries"><span>Guess {tries} of {MAX_TRIES}</span></div>
	<SearchBar {onsearch} type="units" guesses={triesList} />
</div>
<GuessList guessList={triesList} type="units" current={CURRENT} />

<style>
	.header {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.header h1 {
		font-size: 2rem;
		font-weight: 700;
	}

	.tries {
		width: 56%;
		margin: 8px;
		float: right;
		display: flex;
		justify-content: right;
	}

	.search-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
