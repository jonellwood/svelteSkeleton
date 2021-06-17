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
  export let posts;
</script>

<div class="posts">
  <slot />
  <aside class="projectList">
    <h5>Project List</h5>
    <ui>
      {#each posts as post}
        <li><a sveltekit:prefetch href={ `/posts/${post.slug}`}>{post.title}</a></li>
      {/each}
        <!-- <li><a rel="external" href="https://jonellwood.dev">Ellwood</a></li> -->
    </ui>
  </aside>
</div>

<style>
  .posts{
    padding: 1.5rem;
  }
  .projectList{
    display: grid;
    grid-template-columns: 1fr 1fr;

  }

  a{
    text-decoration: none;
    color: grey;
  }

  li{
    list-style: none;
    padding: .5em;
    padding-left: 1.5rem;
  }
  h5{
    font-size: larger;
    padding: 1.5rem;
  }

</style>

