<script>
	let numbers = [1, 2, 3, 4];

	$: {
		console.log(numbers);
	}

	function addNumber() {
		// push 메서드는 set 을 부르지 않는다.
		// numbers.push(numbers.length + 1);
		// numbers에 =으로 number를 할당해주면, set 함수가 작동하여 reactivity해진다.
		// numbers = numbers;

		// numbers = [...numbers, numbers.length + 1];
		numbers[numbers.length] = numbers.length + 1;
	}

	$: sum = numbers.reduce((t, n) => t + n, 0);
</script>

<p>{numbers.join(' + ')} = {sum}</p>

<button on:click={addNumber}> Add a number </button>
