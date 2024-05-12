<script>
	import { units } from './unitsMap';

	/** @typedef Props
	 * @property {String[]} guessList
	 * @property {String} type
	 * @property {any} current
	 * */

	/** @type {Props} */
	let { guessList, type, current } = $props();

	/** @type any[] */
	let guesses = $derived.by(() => {
		/** @type any[] */
		let returnable = [];
		for (const item of guessList) {
			returnable.push(units.get(item));
		}
		return returnable;
	});
</script>

<div>
	<ul>
		{#each guesses as guess}
			<li>
				{#if guess.Name === current.Name}
					Yey - {guess.Name}
				{:else}
					No - {guess.Name}
				{/if}
			</li>
		{/each}
	</ul>
</div>
