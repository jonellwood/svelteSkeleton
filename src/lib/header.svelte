<script>

  function handleClick() {
     alert("Really bro?");
  }
  // darkButton.addEventListener('click', handleClick);
</script>


<header>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/posts">Projects</a>
    <a href="/timeline">Timeline</a>
    <!-- <button on:click={e => {alert("REALLY?? Dark is already set to 11 😄")} } >Dark Mode</button> -->
  </nav>
</header>

<style>
  header{
    text-align: center;
    box-sizing: border-box;
    /* background-color: black; */
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: grey;
    font-size: x-large;
    font-weight: bolder;
    padding: 2%;
  }
  header a{
    padding: 5px;
    text-decoration: none;
    color: black;
  }
  header a:hover{
    color: #D1e8e2;
    box-shadow: 2px 2px 6px #FCCB9A;
    transition: all 0.25s ease .25s;
  }

</style>

