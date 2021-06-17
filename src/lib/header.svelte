<script>
  function alert(){
    alert("REALLY!!");
  }
  function handleClick() {
    document.getElementsByClassName("darkButton").onclick = alert();
  }
  // darkButton.addEventListener('click', handleClick);
</script>


<header>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About Me</a>
    <a href="/posts">Posts</a>
    <button type="button">Dark Mode</button>
  </nav>
</header>

<style>
  header{
    box-sizing: border-box;
    background-color: black;
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
    color: lightgray;
  }
  header button{
    background-color: black;
    color: gray;
    padding-left: 45px;
    border-color: darkgray;
    border-radius: 7px;
  }

</style>

