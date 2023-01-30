<script>
	import Inner from './Inner.svelte';

	function handleMessage(event) {
		console.log(event);
		alert(event.detail.text);
	}
</script>

<!-- 양방향 props  -->
<Inner on:message={handleMessage} />
