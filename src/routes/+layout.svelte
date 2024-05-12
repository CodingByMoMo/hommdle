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

<slot />

<footer>
	<div class="fmenu">
		<div class="fitem">Section for some shit text xd</div>
		<div class="fitem fmiddle">
			<ul>
				<li class="lil-menu-header"><span>Menu</span></li>
				<li>Unit guessing</li>
				<li>Heros guessing</li>
				<li>Unit glossary</li>
				<li>Heros glossary</li>
				<li>Hota Petition</li>
			</ul>
		</div>
		<div class="fitem">
			<div><span>Vist our socials</span></div>
		</div>
	</div>
	<div class="copyright">
		<div>© {year} @CodingWithMoMo and MrPorKon under the MIT license.</div>
	</div>
</footer>

<style>
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
		color: #fdfdfd;
		margin: 0;
		background-color: #1d1a26;
	}
	header {
		display: flex;
		flex-direction: column;
	}
	.logo-container {
		width: calc(100dvh - 20px);
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
		border: solid 1px #fdfdfd;
		margin: 0px 16px;
		padding: 8px 16px;
		border-radius: 15px;
	}

	nav ul li:hover {
		border-color: #ebebeb;
	}

	a {
		color: #fdfdfd;
		font-size: 1.125rem;
		text-decoration: none;
	}
	footer {
		position: absolute;
		bottom: 0;
		width: 100%;
	}

	.fmenu {
		display: flex;
		flex-direction: row;
		margin: 8px 16px;
	}

	.fmiddle {
		border-right: 1px solid #060508;
		border-left: 1px solid #060508;
	}

	.fitem {
		width: 33%;
		padding: 8px;
	}

	.copyright {
		border-top: 1px solid #060508;
		padding: 8px 0px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
