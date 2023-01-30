<script>
	let cats = [
		{
			id: 'J---aiyznGQ',
			name: 'Keyboard Cat'
		},
		{
			id: 'z_AbfPXTKms',
			name: 'Maru'
		},
		{
			id: 'OUtn3pvWmpg',
			name: 'Henri The Existential Cat'
		}
	];
</script>

<h2>Each를 활용해 배열 돌리기</h2>

<ul>
	{#each cats as cat, i}
		<li class="items">
			<p>{i + 1} :</p>
			<p>
				<a target="_blank" href="https://www.youtube.com/watch?v={cat.id}">
					{cat.name}
				</a>
			</p>
		</li>
	{/each}
</ul>

<style>
	.items {
		display: flex;
	}
</style>
