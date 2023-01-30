<script>
	import Inner from './Inner.svelte';
</script>

<!-- DOM event와 달리 컴포넌트는 버블이 발생하지 않는다.
그래서 포워드를 해줘야하는데 아래처럼쓰면 쉽게 버블이된다. -->
<Inner on:message />
