<script>
	import { quintOut } from 'svelte/easing';
	import { fade, draw, fly } from 'svelte/transition';
	import { expand } from '../lib/custom-transition';
  import { onMount } from 'svelte';

	let visible = false;
  onMount(() => visible = true), setTimeout(() => visible = false, 5000);

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

{#if !visible}
  <div>
    <p>I AM A P TAG BEEEEOCH</p>
  </div>
{/if}

</main>

<style>
  main{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: black;
    color: gray;
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
