<template>
	<h2>當前求和為：{{ sum }}</h2>
	<br />
	<button @click="sum++">點我+1</button>
</template>

<script>
	import { ref } from 'vue';
	export default {
		name: 'demoOne',
		setup() {
			// 資料
			let sum = ref(0);
			return {
				sum,
			};
		},
	};
</script>

<style></style>
