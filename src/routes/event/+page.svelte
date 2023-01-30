<script>
	import ComponentEvents from './ComponentEvents.svelte';
	import EventModifier from './EventModifier.svelte';
	import OnDomevents from './OnDomevents.svelte';
</script>

<h1>event part</h1>

<div class="container">
	<OnDomevents />
	<EventModifier />
	<ComponentEvents />
</div>

<style>
	.container {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
</style>
