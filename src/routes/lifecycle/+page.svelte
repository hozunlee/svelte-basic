<script>
	let show = false;
	import OnMount from './OnMount.svelte';

	import { delayRender, lifecycle } from './lifemodule.js';

	let done = delayRender(3000);
	lifecycle();
	let name = 'world';
</script>

<h1>Life Cycle Part</h1>

<button on:click={() => (show = !show)}>버튼</button>

{#if show}
	<OnMount />
{/if}

<div>
	{#if $done}
		<h1>Hello {name}!</h1>
	{/if}
</div>
