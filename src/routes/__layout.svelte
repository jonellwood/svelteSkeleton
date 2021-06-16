<script>
  import Header from '$lib/header.svelte'
  import "../tailwind.css";
</script>


<Header />

<main class="bg-blue-400">
  <slot />
</main>

<footer>Copywrite 2021 Ellwood Front End Solutions</footer>

<style>
  footer {
    background-color: hotpink;
  }
</style>

