<!-- <script>
  let src = 'src/lib/Svelte_Logo.svg.png';
</script> -->


<footer>
  <span class="generic">Generic Front End Solutions you can probably just do yourself.</span>
  <span class="siteInfo">Site built with Sveltekit
    <!-- <img class="logo" src = {src} alt="Logo."> -->
  </span>
  <span class="copywrite">©️ Ellwood Front End Solutions 2021</span>
</footer>

<style>
  footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    display: grid;
    grid-template-rows: 2fr 1fr 1fr;
    background-color: black;
    color: gray;
    font-family: 'Courier New', Courier, monospace;
    text-align: center;
    padding-top: 10px;
    gap: 15px;
    align-items: center;
  }
  .generic{
    font-size: x-large;
    text-align: justify;
    padding-left: 25px;
    padding-right: 25px;
  }
  .siteInfo{
    font-size: smaller;
  }

  .copywrite{
    padding-bottom: 15px;
  }
  .logo{
    height: 20px;
  }
</style>
