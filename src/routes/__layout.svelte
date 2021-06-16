<script>
  import Header from '$lib/header.svelte'
  import "../tailwind.css";
</script>


<Header />

<main class="bg-blue-400">
  <slot />
</main>

<footer class="bg-black text-gray-500 font-mono text-center p-7">©️ 2021 Ellwood Front End Solutions</footer>

<!-- <style>
  footer {
    background-color: black;
    color: grey;
  }
</style> -->

