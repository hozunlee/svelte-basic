<script>
	export let item;
	export let handleDel;
	let editing = false;
</script>

<li class="doList">
	{#if editing}
		<input type="text" bind:value={item.word} />
	{:else}
		<label for="">
			<input type="checkbox" bind:checked={item.done} />{item.word}
		</label>
	{/if}
	<button on:click={() => (editing = !editing)}>수정</button>
	<button on:click={() => handleDel(item.id)}>삭제</button>
</li>
