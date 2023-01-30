<script>
	import { each } from 'svelte/internal';

	const emojis = {
		apple: '🍎',
		banana: '🍌',
		carrot: '🥕',
		doughnut: '🍩',
		egg: '🥚'
	};

	// the name is updated whenever the prop value changes...
	export let name;

	// each에 key값을 넣어주면 해당 컴포넌트는 처음이외에 렌더링 되지 않는다.
	$: {
		console.log(name);
		console.log(emoji);
	}

	// ...but the "emoji" variable is fixed upon initialisation of the component
	const emoji = emojis[name];
</script>

<p>
	<span>The emoji for {name} is {emoji}</span>
</p>

<style>
	p {
		margin: 0.8em 0;
	}

	span {
		display: inline-block;
		padding: 0.2em 1em 0.3em;
		text-align: center;
		border-radius: 0.2em;
		background-color: #ffdfd3;
	}

	@media (prefers-color-scheme: dark) {
		span {
			background-color: #4f352b;
		}
	}
</style>
