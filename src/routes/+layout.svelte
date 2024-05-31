<script>
	const year = new Date().getFullYear();
</script>

<svelte:head>
	<title>hommdle</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link
		href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<header>
	<div class="logo-container">
		<img src="../logo.webp" alt="hommdle logo" />
	</div>
	<nav>
		<ul>
			<li><a href="/">Unit guessing</a></li>
			<li><a href="/heroes">Heros guessing</a></li>
			<li><a href="/about">About hommdle</a></li>
		</ul>
	</nav>
</header>

<slot class="slot" />

<footer>
	<div class="fmenu">
		<div class="fitem">
			<ul>
				<li class="li-head"><span>Menu</span></li>
				<li><a href="/">Unit guessing</a></li>
				<li><a href="/heroes">Heros guessing</a></li>
				<li><a href="/glossary/unit">Unit glossary</a></li>
				<li><a href="/glossary/heroes">Heros glossary</a></li>
				<li><a href="/petition">Hota Petition</a></li>
			</ul>
		</div>
		<div class="fitem text">
			<span class="topic">Enjoy the game of hommdle!</span><br />
			hommdle is a guessing game about our favorite game Heroes of Might and Magic III. The rules are
			easy, type the name of unit or hero and check if the specification are matching. Grenn means you
			guess correctly, red is wrong and orange that you are near. Good luck.
		</div>
	</div>
	<div class="copyright">
		<div>© {year} @CodingWithMoMo and MrPorKon under the MIT license.</div>
	</div>
</footer>

<style>
	:global(:root) {
		--bg-color: #0a0807;
		--accent-color: #be4b35;
		--accent-hover: #7c3122;
		--text: #efeff0;
		--text-hover: #c2c3c8;
		--bg-accent: #1f1814;
		--wrong: #a70000;
		--success: #0c7200;
		--near: #be5700;
	}

	:global(html) {
		font-size: 16px;
		font-family: 'Work Sans', sans-serif;
		font-optical-sizing: auto;
		font-weight: normal;
		font-style: normal;
	}
	:global(body) {
		display: flex;
		width: 100dvw;
		flex-direction: column;
		color: var(--text);
		margin: 0;
		background-color: var(--bg-color);
	}
	header {
		padding-top: 24px;
		display: flex;
		flex-direction: column;
	}
	.logo-container {
		height: 150px;
		padding: 10px;
		display: flex;
		justify-content: center;
		align-content: center;
	}
	nav {
		padding: 15px;
	}
	nav ul {
		display: flex;
		justify-content: center;
		flex-direction: row;
		list-style: none;
	}

	nav ul li {
		color: var(--text);
		border-bottom: solid 1px var(--accent-color);
		margin: 0px 16px;
		padding: 4px 16px;
	}

	nav ul li:hover {
		color: var(--text-hover);
		border-color: var(--accent-hover);
	}

	a {
		color: inherit;
		font-size: 1.125rem;
		text-decoration: none;
	}

	.slot {
		height: auto;
	}

	footer {
		width: 100%;
	}

	.fmenu {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		margin: 8px 16px;
	}

	.fmenu ul {
		list-style: none;
	}

	.li-head {
		font-size: 1.25rem;
		font-weight: 600;
		padding-bottom: 4px;
	}

	.fmenu ul li {
		color: var(--text);
	}

	.fmenu ul li a:hover {
		color: var(--text-hover);
	}

	.fitem {
		padding: 8px;
	}

	.text {
		width: 25%;
	}

	.topic {
		font-size: 1.125rem;
	}

	.copyright {
		border-top: 1px solid #060508;
		padding: 8px 0px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
