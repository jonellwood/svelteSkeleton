<script>
  function alert(){
    alert("REALLY!!");
  }
  function handleClick() {
    document.getElementsByClassName("darkButton").onclick = alert();
  }
  // darkButton.addEventListener('click', handleClick);
</script>


<header class="bg-black text-gray-700 font-mono p-8 text-4xl">
  <nav>
    <a class="hover:text-gray-200" href="/">Home</a>
    <a class="hover:text-gray-200" href="/about">About Me</a>
    <a class="hover:text-gray-200" href="/posts">Posts</a>
    <button type="button" class="darkButton text-base object-right-top">Dark Mode</button>
  </nav>
</header>



<!-- <style lang="scss">
  header{
    background-color: hotpink;
    nav {
      background: blue;
    }
  }
</style> -->
