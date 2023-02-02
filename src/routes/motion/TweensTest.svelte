<script>
	// writable 을 사용하면 뚝뚝 끊기는 느낌이 난다.
	// import { writable } from 'svelte/store';
	// const progress = writable(0);

	// tweend를 적용하면 애니메이션이 적용되고 cubiOut을 적용하면 부드러워진다.
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	const progress = tweened(0, {
		delay: 1000,
		duration: 400,
		easing: cubicOut
	});
</script>

<progress value={$progress} />

<button on:click={() => progress.set(0)}> 0% </button>

<button on:click={() => progress.set(0.25)}> 25% </button>

<button on:click={() => progress.set(0.5)}> 50% </button>

<button on:click={() => progress.set(0.75)}> 75% </button>

<button on:click={() => progress.set(1)}> 100% </button>

<style>
	progress {
		display: block;
		width: 100%;
	}
</style>
