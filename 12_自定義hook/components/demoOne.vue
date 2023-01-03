<template>
	<h2>當前求和為：{{ sum }}</h2>
	<button @click="sum++">點我+1</button>
	<hr />
	<h2>當前點擊滑鼠的座標 x：{{ point.x }}，y：{{ point.y }}</h2>
</template>

<script>
	import { ref } from 'vue';
	import usePoint from '../hooks/usePoint';
	export default {
		name: 'demoOne',
		setup() {
			// 資料
			let sum = ref(0);
			let point = usePoint();

			return {
				sum,
				point,
			};
		},
	};
</script>

<style></style>
