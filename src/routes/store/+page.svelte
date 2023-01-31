<script>
	import { count } from './stores.js';
	import Incrementer from './Incrementer.svelte';
	import Decrementer from './Decrementer.svelte';
	import Resetter from './Resetter.svelte';
	let count_value;

	// count가 바뀌는 걸 구독하겠다는 의미
	count.subscribe((value) => (count_value = value));
</script>

<h1>the count is {count_value}</h1>

<Incrementer />
<Decrementer />
<Resetter />
