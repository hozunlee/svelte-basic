<script>
	import Dis from './Dis.svelte';

	const hello = (event) => {
		console.log('hello');
		console.log(event.detail);
	};

	const bye = (props) => {
		console.log('bye');
		console.log(props);
	};
</script>

<h1>enfin</h1>
<h2>svelte tutorial</h2>

<Dis on:hello={hello} />
<Dis {bye} />
