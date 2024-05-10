<script>
	import GuessList from "$lib/GuessList.svelte";
  import SearchBar from "$lib/SearchBar.svelte";
  import {units} from "../lib/units";

  const MAX_TRIES = 5;
  const CURRENT = units[1];

  let tries = $state(0);
  /** @type{String[] } */
  let triesList = $state([]);

  /** @type{function(KeyboardEvent,String): void}*/ 
  function onkeydown(event, value) {
    if(event.code === "Enter") {
      console.log(value);
      tries += 1;
      triesList.push(value)
      //search for the units or herose
    }
  }

</script>


<h1> Unit guessing</h1>

<SearchBar {onkeydown} type="units" />

<span>Guess {tries} of {MAX_TRIES}</span>

<GuessList guessList={triesList} type="units" current={CURRENT} />
