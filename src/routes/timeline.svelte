<script>
  import Field from '../lib/Field.svelte';
  import SearchFilter from '../lib/SearchFilter.svelte';
  let search = '';
  let items = [
    "React",
    "Redux",
    "Svelte",
    "Gatsby",
    "NodeJS",
    "Keystone",
    "Apollo",
    "fatTireJS"
  ]
</script>

<h1>This page is mainly to show a reactive search feature although I plan making it more informative down the road.</h1>
<h2>Timeline for {search}</h2>

<Field
  bind:value={search}
  label="Search"
  instructions="Type to Search"
  placeholder="Hold my place please"/>
<Field
  value=0
  label="Number"
  type="number"
  />

<SearchFilter {items} bind:search/>
