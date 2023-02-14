<script>
	export let bye;
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
</script>

{#if bye}
	<button on:click={() => bye('캘리포니아')}>푸시버튼</button>
{:else}
	<button on:click={() => dispatch('hello', '시드니')}>푸시버튼</button>
{/if}
