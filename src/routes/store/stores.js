import { writable, readable, derived } from 'svelte/store';

export const count = writable(0);

// 1번째 매개변수, 초기값
// 2번째 매개변수 start function takes a set callback and return a stop function.
export const time = readable(new Date(), (set) => {
	console.log('마운트이지롱');
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);
	return () => {
		console.log('언마운트 이지롱');
		return clearInterval(interval);
	};
});

const start = new Date();

export const elapsed = derived(time, ($time) => Math.round(($time - start) / 1000));
