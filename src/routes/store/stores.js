import { writable, readable, derived } from 'svelte/store';

// 기본 세팅
// export const count = writable(0);

// 커스텀 세팅
const createCount = () => {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update((cur) => cur + 1),
		decrement: () => update((cur) => cur - 1),
		reset: () => set(0)
	};
};

export const count = createCount();

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

export const name = writable('world');

export const greeting = derived(name, ($name) => `Hello ${$name}!`);
