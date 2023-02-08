<script>
	import Card from './Card.svelte';

	let words = [
		{
			id: 0,
			word: '친구만나기',
			done: false
		}
	];
	let addDoInput;
	$: console.log(addDoInput);
	let newWord;
	const onAddTodo = () => {
		const newThing = {
			id: words.length,
			word: newWord,
			done: false
		};
		words = [...words, newThing];
		newWord = '';

		console.log('words :>> ', words);
	};

	const handleDel = (delId) => {
		words = words.filter((item) => item.id !== delId);
	};
</script>

<h1>TODO list</h1>

<form action="">
	<input bind:this={addDoInput} autofocus type="text" name="" id="" bind:value={newWord} />
	<button on:click={onAddTodo}>Do</button>
</form>

<p>엄태진</p>

<ul class="todo">
	{#each words as item (item.id)}
		<!-- content here -->
		<Card {item} {handleDel} />
	{/each}
</ul>

<style>
	.doList {
		list-style: none;
	}
</style>
