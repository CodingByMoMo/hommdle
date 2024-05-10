<script>
	import SearchBar from "$lib/SearchBar.svelte";

  let tries = $state(0);
  /** @type{String[] } */
  let triesList = $state([]);
  const MAX_TRIES = 5;

  /** @type{function(KeyboardEvent,String): void}*/ 
  function onkeydown(event, value) {
    if(event.code === "Enter") {
      tries += 1;
      triesList.push(value)
      //search for the units or herose
    }
  }

</script>


<h1> Unit guessing</h1>

<SearchBar {onkeydown} type="units" />

<span>Guess {tries} of {MAX_TRIES}</span>
