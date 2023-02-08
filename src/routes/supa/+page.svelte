<script>
	export let data;
	let { countries } = data;
	$: ({ countries } = data);
</script>

<ul>
	{#each countries as con}
		<li>{con.name}</li>
	{/each}
</ul>
