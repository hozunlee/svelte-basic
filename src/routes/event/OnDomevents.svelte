<script>
	let m = { x: 0, y: 0 };

	const handleMousemove = (event) => {
		m.x = event.clientX;
		m.y = event.clientY;
	};
</script>

<!-- 
  inline handlers svelte는 이렇게해도 성능상의 이슈가 전혀 없다!
  <div on:mousemove={e =>m = {x: e.clientX, y: e.clientY}}> -->
<div on:mousemove={handleMousemove}>the mouse position is {m.x} x {m.y}</div>

<style>
	div {
		width: 100%;
		height: 20%;
		background-color: blueviolet;
	}
</style>
