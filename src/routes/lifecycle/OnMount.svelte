<script>
	import { onMount } from 'svelte';

	let data;

	$: {
		console.log('바깥', data);
	}
	onMount(async () => {
		const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
		data = await res.json();

		return () => {
			console.log('컴포넌트 클린업');
		};
	});
</script>

{#if data}
	<!-- content here -->
	<p>{data.title}</p>
{:else}
	<!-- else content here -->
	<p>로딩중</p>
{/if}
