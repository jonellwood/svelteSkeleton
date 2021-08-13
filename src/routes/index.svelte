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
    </div>

  </div>

{/if}

</main>

<style>
  main{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    /* background-color: #FFCC0030; */
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
  .shows-after{
    /* background:grey; */
    background-color: #4169e1;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'%3E%3Cg fill-opacity='0.5'%3E%3Ccircle fill='%234169e1' cx='50' cy='0' r='50'/%3E%3Cg fill='%235570db' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%236677d5' cx='50' cy='100' r='50'/%3E%3Cg fill='%23747dcf' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%238083c9' cx='50' cy='200' r='50'/%3E%3Cg fill='%238b89c3' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%23968ebc' cx='50' cy='300' r='50'/%3E%3Cg fill='%23a093b5' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%23a999ae' cx='50' cy='400' r='50'/%3E%3Cg fill='%23b29da7' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%23baa29f' cx='50' cy='500' r='50'/%3E%3Cg fill='%23c2a797' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%23caab8e' cx='50' cy='600' r='50'/%3E%3Cg fill='%23d1b085' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%23d8b47b' cx='50' cy='700' r='50'/%3E%3Cg fill='%23dfb871' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%23e6bc65' cx='50' cy='800' r='50'/%3E%3Cg fill='%23ecc057' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%23f3c447' cx='50' cy='900' r='50'/%3E%3Cg fill='%23f9c832' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%23ffcc00' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: contain;
    background-position: 100%;
    color:black;
    height: 500px;
    margin-left: 50px;
    margin-right: 50px;
    padding: 50px;
    border: 30px solid pink;
    height: 40vh;
    border: 25px solid #4169e1;
    border-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='75' height='75'%3E%3Cg fill='none' stroke='%23B88846' stroke-width='2'%3E%3Cpath d='M1 1h73v73H1z'/%3E%3Cpath d='M8 8h59v59H8z'/%3E%3Cpath d='M8 8h16v16H8zM51 8h16v16H51zM51 51h16v16H51zM8 51h16v16H8z'/%3E%3C/g%3E%3Cg fill='%23B88846'%3E%3Ccircle cx='16' cy='16' r='2'/%3E%3Ccircle cx='59' cy='16' r='2'/%3E%3Ccircle cx='59' cy='59' r='2'/%3E%3Ccircle cx='16' cy='59' r='2'/%3E%3C/g%3E%3C/svg%3E") 25;

}
.shows-after h2{
  text-align: center;
}
  ul{
    list-style: none;
    line-height: 2.5;
  }
</style>
