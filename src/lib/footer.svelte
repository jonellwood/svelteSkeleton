

<script>
  import Icon from 'fa-svelte'
  import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle'

  let icon = faCircle;
</script>


<footer>
  <span class="generic">Generic Front End Solutions you can probably just do yourself.</span>
  <span class="siteInfo">Site built with Sveltekit
    <Icon icon={icon}>
    </Icon>
    <!-- <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/32px-Svelte_Logo.svg.png" alt="logo /> -->
  </span>
  <span class="copywrite">©️ Ellwood Front End Solutions 2021</span>
</footer>

<style>
  footer{
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
  }
  .siteInfo{
    font-size: smaller;
  }

  .copywrite{
    padding-bottom: 15px;
  }
</style>
