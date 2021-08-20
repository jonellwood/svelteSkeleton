<script>
  import TechCheck from '$lib/TechCheck.svelte';
  import Field from '../lib/Field.svelte';
  import SearchFilter from '../lib/SearchFilter.svelte';
  import TechDrop from '../lib/TechDrop.svelte';

  let search = '';
  let search2 = '';
  let items = [
    "React",
    "Redux",
    "Svelte",
    "Gatsby",
    "NodeJS",
    "Keystone",
    "Apollo",
    "fatTireJS"
  ]
  let tech1 = [
    "React",
    "Vue",
    "Gatsby",
    "Eleventy",
    "Wordpress",
  ]

  let tech2 = [
    "Sanity.io",
    "Contentful",
    "Strapi",
    "GraphCMS",
    "Netlify",
    "prismic.io"
  ]
</script>

<h1>This page is mainly to show a reactive search feature although I plan making it more informative down the road.</h1>
<h2>Timeline for {search}</h2>

<!-- <Field
  bind:value={search}
  label="💩💩💩💩💩"
  instructions="Type to Search"
  placeholder="Hold my place please"/> -->
<!-- <Field
  value=0
  label="Number"
  type="number"
  /> -->

<TechDrop />



