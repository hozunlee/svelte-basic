<script>
	const getRandomNumber = async () => {
		const res = await fetch(`https://svelte.dev/tutorial/random-number`);
		const text = await res.text();

		if (res.ok) return text;
		else throw new Error(text);
	};

	let myPromise = getRandomNumber();

	const handleClick = () => {
		myPromise = getRandomNumber();
	};
</script>

<h2>await blocks</h2>

<button on:click={handleClick}> generate random number </button>

{#await myPromise}
	<p>...waiting</p>
{:then number}
	<p>the number is {number}</p>
{:catch error}
	<p class="errorMsg">{error.message}</p>
{/await}

<!-- 
	// reject를 반환하지 않는다고 알고있다면! 
	{#await myPromise then number}
	<p>the number is {number}</p>
{/await} -->
<style>
	.errorMsg {
		color: red;
	}
</style>
