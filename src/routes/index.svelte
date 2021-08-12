<script>
	import { quintOut } from 'svelte/easing';
	import { fade, draw, fly } from 'svelte/transition';
	import { expand } from '../lib/custom-transition';
  import { onMount } from 'svelte';

	let visible = false;
  onMount(() => visible = true);

</script>

<main>
<!-- <h1>jon ellwood</h1> -->
{#if visible}
	<div class="centered" out:fly="{{y: -20, duration: 800}}">
		{#each 'ellwood' as char, i}
			<span
				in:fade="{{delay: 1000 + i * 150, duration: 800}}"
			>{char}</span>
		{/each}
	</div>
{/if}

<!-- {#if !visible}
  <img
    src="https://res.cloudinary.com/drwfft7zs/image/upload/v1628611739/jonellwood%20dot%20dev/jon_ellwood_cinsc4.svg"
    alt="jon ellwood">
  <article>
    <p>I want to become a big boy web dev one day. I am interesting in anything related to JavaScript and any tech around it. I am self taught - although I never cared for that term as I feel it does not give credit to content creators that I have learned from. I devour as much information and knowledge as I can to improve my skills.
  </p>
  </article>
{/if} -->

<!-- <label>
	<input type="checkbox" bind:checked={visible}>
	learn more
</label> -->


</main>

<style>
  main{
    font-family: sans-serif;
    background-color: black;
    color: gray;
  }
  h1{
    font-size:x-large;
    padding: 1em;
  }
  p{
    padding: 1em;
    padding-left: 1.5em;
    padding-right: 1.5em;

  }

	label {
		/* position: absolute; */
		top: 1em;
		left: 1em;
	}

	.centered {
		font-size: 20vw;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		font-family: 'Overpass';
		letter-spacing: 0.12em;
		color: #676778;
		font-weight: 400;
	}

	.centered span {
		will-change: filter;
	}
</style>
