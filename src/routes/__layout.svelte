<script>
  import Header from '$lib/header.svelte'
  import Footer from '$lib/footer.svelte'
  // import "../tailwind.css";
</script>


<Header />

<main>
  <slot />
</main>

<Footer />

<style>
  main{
    box-sizing: border-box;
    margin: 0;
    background-color: black;
    color: gray;
  }
</style>

