<script>
  import {fade} from 'svelte/transition';
  export let tech1;
  export let tech2;
  export let search1 = " ";
  export let search2 = " ";
  let isFocused = false;

  $: filteredSearch = items.filter((item) => {
    return search === '' || item.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });
</script>

<div class="seachDiv">
  <label>
    <h2>Looking for experience with a specific tech stack?</h2>
      >br />
    <input
      on:focus={() => isFocused = true}
      bind:value={search1}
      type="text"
      placeholder="Search Front End">
  </label>

  {#if isFocused}
  <ul transition:fade={{ duration: 200}}>
    {#each filteredSearch as item}
      <
      transition:fade={{ duration: 200}}
      on:click={() => {
        search1=tech1;
        isFocused = false
      }}>{item}</li>
    {/each}
  </ul>
  {/if}
</div>
<style>
  .searchDiv{
    position: relative;
    display: inline-block;
  }
  ul{
    text-transform: capitalize;
    position: absolute;
    width: 100%;
    border: solid 1px black;
    padding: 0;
    margin: 0;
  }
  li{
    list-style: none;
    padding: 10px;
    cursor: pointer;
    transition: 0.3s background ease;
  }
  li:hover{
    background: #eee;
  }
</style>

