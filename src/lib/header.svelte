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
    <!-- <button on:click={e => {alert("REALLY?? Dark is already set to 11 😄")} } >Dark Mode</button> -->
  </nav>
</header>

<style>
  header{
    text-align: center;
    box-sizing: border-box;
    /* background-color: black; */
    margin: 0;
    font-family: sans-serif;
    color: grey;
    font-size: x-large;
    padding: 2%;
  }
  header a{
    padding: 5px;
    text-decoration: none;
    color: gray;
  }
  header a:hover{
    color: #4169E1;
  }

</style>

