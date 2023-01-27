<script>
	// your script goes here
	let count = 0;

	// 여러 번 참조하거나, 다른 반응형 값에 따라 달라지는 값이 있을 때 사용
	$: doubled = count * 2;

	const increment = () => {
		count += 1;
	};
</script>

<div>
	<button on:click={increment}>
		Clicked {count}
		{count <= 1 ? 'time' : 'times'}
	</button>
	<p>{count} doubled is {doubled}</p>
	<p>{count} doubled is {count * 2}</p>
</div>

<!-- markup (zero or more items) goes here -->
<style>
	/* your styles go here */
</style>
