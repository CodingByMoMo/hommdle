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

<div class="container">
	<ul class="guess-list">
		{#each guesses as guess}
			<li>
				{#if guess.Name === current.Name}
					Yey - {guess.Name}
				{:else}
					<div class="guess">
						<div class="portrait">
							<img alt={guess.Name} src={'../portraits/' + guess.Image} />
						</div>
						<div class="data">
							<div class="top-row">
								<div class="name">{guess.Name}</div>
							</div>
							<div class="bottom-row">
								<div class="town g-cell">
									<div class="h">Town:</div>
									<div class="v">{guess.Town}</div>
								</div>
								<div class="tier g-cell">
									<div class="h">Tier:</div>
									<div class="v">{guess.Tier}</div>
								</div>
								<div class="attack-type g-cell">
									<div class="h">Attak type:</div>
									<div class="v">{guess.AttackType}</div>
								</div>
								<div class="cost g-cell">
									<div class="h">Cost:</div>
									<div class="v">{guess.Cost}</div>
								</div>
							</div>
						</div>
					</div>
				{/if}
			</li>
		{/each}
	</ul>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		height: fit-content;
	}

	.guess-list {
		list-style: none;
	}
	.guess {
		min-width: 400px;
		display: flex;
		flex-direction: row;
	}

	.portrait {
		height: 120px;
		aspect-ratio: 5 / 6;
		background-color: var(--bg-accent);
		padding: 16px;
		border-radius: 20px;
		margin: 8px;
	}

	.portrait img {
		border: 1px solid var(--accent-color);
	}

	.h {
		font-size: 1.125rem;
		font-weight: 500;
		margin-bottom: 8px;
	}

	.v {
		height: 60%;
		display: flex;
		align-items: center;
	}

	.g-cell {
		min-width: 100px;
		margin: 0px 8px;
		background-color: var(--bg-accent);
		border-radius: 20px;
		padding: 8px 24px;
		height: 80%;
	}

	.data {
		width: 100%;
		margin-left: 8px;
		display: inherit;
		flex-direction: column;
	}

	.top-row,
	.bottom-row {
		padding: 8px 0px;
		display: inherit;
		flex-direction: row;
		justify-content: space-between;
	}

	.bottom-row {
		height: 100%;
	}

	.name {
		background-color: var(--bg-accent);
		width: 100%;
		border-radius: 20px;
		font-size: 1.375rem;
		padding: 8px 24px;
	}

	.town {
	}
</style>
