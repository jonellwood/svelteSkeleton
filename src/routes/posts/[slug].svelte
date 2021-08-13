<script context="module">
  export async function load({ page }) {
    try {
      const Post = (await import(`../../posts/${page.params.slug}.md`));
      return {
        props: {
          Post: Post.default,
        }
      }

    } catch (e) {
      // return {
      //   status: 303,
      //   redirect: "/posts"
      // };
      return {
        status: 404,
        error: "Oh Smurf it all! We cant find that smurf you requested! 🤡"
      };
    }
  }
</script>

<script>
  export let Post;
</script>

<svelte:component this={Post}/>
