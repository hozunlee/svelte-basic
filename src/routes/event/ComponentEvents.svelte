<script>
	import Inner from './Inner.svelte';

	function handleMessage(event) {
		console.log(event);
		alert(event.detail.text);
	}
</script>

<Inner on:message={handleMessage} />
