<script>
	import { count } from './stores.js';
	import Incrementer from './Incrementer.svelte';
	import Decrementer from './Decrementer.svelte';
	import Resetter from './Resetter.svelte';

	// count가 바뀌는 걸 구독하겠다는 의미
	// let count_value;
	// 1. never unsubscribed. result in a memory leak
	// count.subscribe((value) => (count_value = value));

	// 2. use onDestroy (clean up)
	// const unsubscribe =   count.subscribe((value) => (count_value = value));
	// onDestroy(unsubscribe)
</script>

<!-- use 1 or 2 -->
<!-- <h1>the count is {count_value}</h1> -->

<!-- you can reference a store value by prefixing the store name with $: -->
<h1>WritableStore</h1>
<h2>the count is {$count}</h2>

<Incrementer />
<Decrementer />
<Resetter />
