<script>
	import { count } from './stores.js';

	function increment() {
		// TODO increment the count
		// cur는 현재 count의 값
		count.update((cur) => cur + 1);
	}
</script>

<button on:click={increment}> + </button>
