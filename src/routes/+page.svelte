<script>
	// your script goes here
	let count = 0;

	// 첫 실행 시에만 동작한다.
	console.log(count);

	// 반응형 밸류는 count가 바뀔 때마다 실행한다. like useEffect
	$: {
		console.log(`the count is ${count}`);
	}

	$: if (count >= 10) {
		alert('reset');
		count = 0;
	}

	const increment = () => {
		count += 1;
	};
</script>

<div>
	<button on:click={increment}>
		Clicked {count}
		{count <= 1 ? 'time' : 'times'}
	</button>
	<p>{count} doubled is {count * 2}</p>
</div>

<!-- markup (zero or more items) goes here -->
<style>
	/* your styles go here */
</style>
