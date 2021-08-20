<script>
  import Select from 'svelte-select@4.3.1';

  const items = [
    {value: 'react', label: 'React'},
    {value: 'vue', label: 'Vue'},
    {value: 'gatsby', label: 'Gatsby'},
    {value: 'eleventy', label: '11ty'},
    {value: 'wordpress', label: 'Wordpress'},
  ];

  let frontEnd = undefined;

  function handleSelect(e) {
    frontEnd - e.detail;
  }

  function handleClear() {
    frontEnd = undefinedl
  }
</script>

<h2>Front End Tech Selector</h2>

<form>
  <label for="front-end">Front End:</label>
  <Select id="front-end" {items} on:select={handleSelect} on:clear=  {handleClear}>
  </Select>
</form>

{#if frontEnd}
  <p> Have you tried {frontEnd.label}</p>
{/if}

<style>
	form {
		max-width: 400px;
		background: #f4f4f4;
		padding: 20px;
		border-radius: 4px;
	}

	label {
		margin: 0 0 10px;
	}
</style>
