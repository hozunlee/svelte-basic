<script>
	export let data;
	$: console.log(data);
</script>

<h1>detail blog</h1>

<h2>{data.post.title}</h2>
<div>{@html data.post.content}</div>
