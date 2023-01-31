<script>
	let show = false;
	import OnMount from './OnMount.svelte';
</script>

<h1>Life Cycle Part</h1>

<button on:click={() => (show = !show)}>버튼</button>

{#if show}
	<OnMount />
{/if}
