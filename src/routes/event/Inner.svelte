<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	// 상위 이벤트 객체에 dispatch를 통해 detail을 담아 보낼 수 있다.
	// 첫번째 인자는 이벤트명, 두번째 인자는 밸류
	const sayHello = () => {
		dispatch('message', {
			text: 'Hello'
		});
	};
</script>

<button on:click={sayHello}> Click to say hello </button>
