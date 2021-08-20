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
    <!-- <a href="/timeline">Timeline</a> -->
    <!-- <button on:click={e => {alert("REALLY?? Dark is already set to 11 😄")} } >Dark Mode</button> -->
  </nav>
</header>

<style>
  header{
    display: contents;
    text-align: center;
    box-sizing: border-box;
    width: 80%;
    align-content: center;
    /* background-color: #fff; */
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    /* color: #2e2e2e; */
    font-size: x-large;
    font-weight: bolder;
    padding: 2%;
    border: 2px solid #ffc600

  }
  header a{
    padding: 5px;
    text-decoration: none;
    color: #2e2e2e90;
    border: #ffc600 2px solid;
    border-radius: 7px;
    line-height: 150%;
    box-shadow: 2px 2px 5px 2px #4969e1 ;
  }
  header a:hover{
    color: #2e2e2e;
    /* background-color: whitesmoke; */
    box-shadow: 2px 2px 4px 2px yellow;
    transition: all 0.25s ease .25s;
  }

</style>

