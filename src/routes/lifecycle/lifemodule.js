import { onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte';
import { writable } from 'svelte/store';

export function lifecycle() {
	onMount(() => {
		console.log('Mounted');
	});

	onDestroy(() => {
		console.log('onDestroy');
	});

	beforeUpdate(() => {
		console.log('beforeUpdate');
	});

	afterUpdate(() => {
		console.log('afterUpdate');
	});
}

export function delayRender(delay) {
	let render = writable(false);
	onMount(() => {
		setTimeout(() => {
			console.log(3);
			// 일반 변수가 반응성을 가지려면 util 함수가 아닌 컴포넌트내부에 정의되어야한다
			// render = true로 값을 바꾸고 app.svelte에 render가 true인 값으로 바꿔도 true로 바뀐것을 컴포넌트에서 반응하지 않는다는 의미

			// store 값인 $xxx도 util 함수가 아닌 컴포넌트 내부에서만 사용가능하다, set, update, subscribe 함수 사용가능
			// 컴포넌트 내부에서 $는 자동 subscribe 기능이고  store.subscribe는 자동 구독이 안되는 곳에서 구현하는 수동 구독 (중요!! 스벨트 파일이 아닌곳에서 값을 운반할때 store 값을 자주 사용한다)
			render.set(true);
		}, delay);
	});

	// render 스토어 객체를 delayRender의 반환값으로 리턴하면 component에서는 스토어 객체를 받기에 반응성을 가질 수 있다
	return render;
}
