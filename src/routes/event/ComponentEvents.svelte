<script>
	import Inner from './Inner.svelte';
	import Outer from './Outer.svelte';

	function handleMessage(event) {
		console.log(event);
		alert(event.detail.text);
	}
</script>

<!-- 양방향 props  -->
<Outer on:message={handleMessage} />
