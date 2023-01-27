<script>
	// your script goes here
	let count = 0;

	const increment = () => {
		count += 1;
	};
</script>

<div>
	<button on:click={increment}>
		Clicked {count}
		{count <= 1 ? 'time' : 'times'}
	</button>
</div>

<!-- markup (zero or more items) goes here -->
<style>
	/* your styles go here */
</style>
