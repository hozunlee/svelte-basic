<script>
	import Nested from './Nested.svelte';
</script>

<div>
	<p>This is a test</p>
	<Nested />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	p {
		color: purple;
		font-family: 'Comic Sans MS';
		font-size: 2em;
	}
</style>
