<script>
	import { fade, draw, fly } from 'svelte/transition';
  import { onMount } from 'svelte';

	let visible = false;
  onMount(() => visible = true), setTimeout(() => visible = false, 5000);

</script>

<main>
<!-- <h1>jon ellwood</h1> -->
{#if visible}
	<!-- <div class="centered" out:fly="{{y: -20, duration: 800}}"> -->
	<div class="centered" out:fade="{{delay: 25, duration: 800}}">
		{#each 'ellwood' as char, i}
			<span
				in:fade="{{delay: 1000 + i * 150, duration: 800}}"
			>{char}</span>
		{/each}
	</div>
{/if}

{#if !visible}
  <div class="shows-after" in:fade="{{delay: 250, duration:800}}">
    <div>
      <h2>❓ Why should you hire me ❓ </h2>
    </div>
    <span>
      <ul>
        <li>
          I have years of experince in IT / Network related field. Understanding how data moves around a network / internet helps me build performant sites & apps 🖥️
        </li>
        <li>
          That same experince also taught me a good deal about security best practices and how to apply that to the web 🔒
        </li>
        <li>
          Working for a government agency allowed to learn a great deal about accessability and how that applies to the web ♿
        </li>
      </ul>
    </span>
  </div>

{/if}

</main>

<style>


  main{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    /* background-color: #fff; */
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
		color: #ffc600;
    -webkit-text-stroke-width: 4px;
    -webkit-text-stroke-color: #4969e1;
		font-weight: 400;
    /* text-shadow: 8px 8px yellow; */
	}

	.centered span {
		will-change: filter;
	}
  .shows-after{
    background-attachment: fixed;
    background-size: contain;
    background-position: 100%;
    color: #2e2e2e;
    font-size: 1em;
    height: 500px;
    margin-top: 30px;
    margin-left: 50px;
    margin-right: 50px;
    padding: 50px;
    border: 20px solid #ffc600;
    height: 40vh;
    /* border: 25px solid #4969e1; */
    background-color: #ffffff90;
    box-shadow: 2px 2px 10px 5px #4969e1 ;
}
.shows-after h2{
  text-align: center;
}
  ul{
    list-style: none;
    line-height: 2.5;
  }
</style>
