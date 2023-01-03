<template>
	<h2>我是testConponent元件</h2>
	<h2>當前點擊滑鼠的座標 x：{{ point.x }}，y：{{ point.y }}</h2>
</template>
<script>
	import usePoint from '../hooks/usePoint';
	export default {
		name: 'testConponent',
		setup() {
			let point = usePoint();

			return { point };
		},
	};
</script>
