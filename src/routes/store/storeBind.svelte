<script>
	import { name, greeting } from './stores';
</script>

<h1>{$greeting}</h1>
<input bind:value={$name} />

<button on:click={() => ($name += '!')}>add mark!</button>
<button on:click={() => name.set($name + '!')}>add mark!</button>
