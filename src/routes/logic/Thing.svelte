<script>
	import { each } from 'svelte/internal';

	const emojis = {
		apple: 'π',
		banana: 'π',
		carrot: 'π₯',
		doughnut: 'π©',
		egg: 'π₯'
	};

	// the name is updated whenever the prop value changes...
	export let name;

	// eachμ keyκ°μ λ£μ΄μ£Όλ©΄ ν΄λΉ μ»΄ν¬λνΈλ μ²μμ΄μΈμ λ λλ§ λμ§ μλλ€.
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
