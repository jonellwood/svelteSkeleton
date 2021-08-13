<script context="module">
  export async function load(){
    const posts = import.meta.globEager('../../posts/*.md');
    const postsList = Object.values(posts);
    const postsMeta = postsList.map((post) => {
      return post.metadata;
    })
    // console.log('p0stM3ta', postsMeta);
    return {
      props: {
        posts: postsMeta
      }
    };
  }
</script>

<script>
import Footer from '$lib/footer.svelte';

  export let posts;
</script>

<div class="posts">
  <!-- <h1><a href='/posts'>My Projects </a></h1> -->

  <slot />
  <aside class="projectList">
    <div class="card-wrapper">
      {#each posts as post}
      <div class="card">
        <p><a sveltekit:prefetch href={ `/posts/${post.slug}`}>{post.title} </a></p>
        <p>{post.subject}</p>
        <p>{post.exerpt}</p>

      </div>
      {/each}
        <!-- <li><a rel="external" href="https://jonellwood.dev">Ellwood</a></li> -->
    </div>
  </aside>
</div>
<Footer />
<style>
  a{
    text-decoration: none;
    color: grey;
  }
  .posts{
    padding: 1.5rem;
    margin-left: 2em;
    margin-right: 2em;

  }
  .card{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 1em;
    background-color: whitesmoke;
    margin: 20px;
    border: #4169e1 2px solid;
    border-radius: 7px;
    line-height: 150%;
    /* box-shadow: 2px 2px 5px 2px #ffcc00 ; */
    box-shadow: 4px 4px 8px black ;

    color: black;
  }
  .card:hover{
    box-shadow: 2px 2px 5px yellow;
    background-color: whitesmoke;
    transition: all 0.5s ease .5s;
  }
  .card a{
    color: black;
    font-size: larger;
    font-weight: bolder;
  }

  h1{
    text-align: center;
    padding: 20px;
  }
  .card-wrapper{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-flow: row;
  }
  @media only screen and (max-width: 980px) {
    .card-wrapper{
    grid-template-columns: 1fr 1fr;
    }
  }
  @media only screen and (max-width: 680px) {
    .card-wrapper{
    grid-template-columns: 1fr;
    }
  }

</style>

