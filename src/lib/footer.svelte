<!-- <script>
  let src = 'src/lib/Svelte_Logo.svg.png';
</script> -->


<footer>
  <span class="generic">Generic Front End Solutions you can probably just do yourself.</span>
  <span class="siteInfo">Site built with Sveltekit
    <!-- <img class="logo" src = {src} alt="Logo."> -->
  </span>
  <span class="copywrite">©️ Jon Ellwood 2021</span>
</footer>

<style>
  footer{
    position: relative;
    bottom: 0;
    width: 100%;
    display: grid;
    grid-template-rows: 2fr 1fr 1fr;
    background-color: #fff;
    color: gray;
    font-family: 'Courier New', Courier, monospace;
    text-align: center;
    padding-top: 10px;
    gap: 15px;
    align-items: center;
  }
  .generic{
    font-size: x-large;
    padding-left: 25px;
    padding-right: 25px;
  }
  .siteInfo{
    font-size: smaller;
  }

  .copywrite{
    padding-bottom: 15px;
  }
</style>
