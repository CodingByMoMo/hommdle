<script>
  /** @type {{onkeydown: function(KeyboardEvent,String): void, type: string}} */
  let { onkeydown, type } = $props();
  let searchValue = $state();
  const unitsHints = ["Pikeman", "Archer"];
  const herosHints = ["Crag Hack", "Mephala"];
</script>


<input type="search" id="search" list="hints" bind:value={searchValue} onkeydown={(event) => onkeydown(event, searchValue)}/>

<datalist id="hints">
  {#if type === "units"}
    {#each unitsHints as hint}
      <option value={hint}></option>
    {/each}
  {:else if type === "heros"}
    {#each herosHints as hint}
      <option value={hint}></option>
    {/each}
  {/if }
</datalist>
