<script>
  const year = new Date().getFullYear();
</script>

<header>
  <div class="logo-container">
    <img src="../../static/logo.webp" alt="hommdle logo">
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
  <div>
    <div>
      Section for some shit text xd
    </div>
    <div>
      <ul>
        <li class="lil-menu-header"><span>Menu</span></li>
        <li>Unit guessing</li>
        <li>Heros guessing</li>
        <li>Unit glossary</li>
        <li>Heros glossary</li>
        <li>Hota Petition</li>
      </ul>
    </div>
  </div>
  <div> © {year} @CodingWithMoMo and MrPorKon under the MIT license.</div>
</footer>

<style>
</style>

