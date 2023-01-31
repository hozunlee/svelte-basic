<script>
	import { count } from './stores.js';

	function decrement() {
		// TODO decrement the count
		count.update((cur) => cur - 1);
	}
</script>

<button on:click={decrement}> - </button>
