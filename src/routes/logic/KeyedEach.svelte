<script>
	import Thing from './Thing.svelte';

	let things = [
		{ id: 1, name: 'apple' },
		{ id: 2, name: 'banana' },
		{ id: 3, name: 'carrot' },
		{ id: 4, name: 'doughnut' },
		{ id: 5, name: 'egg' }
	];

	const handleClick = () => {
		things = things.slice(1);
	};
</script>

<h2>Each에 key값이 필요한 이유</h2>
<button on:click={handleClick}> Remove first thing </button>

<!-- loop에 key 값을 추가해야하는 이유 
Svelte에게 구성 요소가 업데이트 될 때 어떤 DOM 노드를 변경할지 파악하는 방법을 알려줍니다. -->
<!-- 일반적으로 특정 객체가 아닌 string이나 number를 key로 사용하는 것이 api server로부터 신선한 데이터를 유지하는데 용이하다. -->
{#each things as thing (thing.id)}
	<Thing name={thing.name} />

	<!-- html에서 console.log 찍는 방법 -->
	{(console.log('in each', thing), '')}
	{@debug thing}

	<!-- undefined가 찍힘 -->
	<!-- {console.log('in each', thing)} -->
{/each}
