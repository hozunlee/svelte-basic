<script>
	import ReadableStore from './ReadableStore.svelte';
	import WritableStore from './WritableStore.svelte';
</script>

<h1>store part</h1>

<WritableStore />
<ReadableStore />

<style>
	h1 {
		background-color: brown;
		color: aliceblue;
		text-shadow: 2px;
	}
</style>
