<template>
	<div class="child">
		<h3>我是Child元件</h3>
		{{ sum }}
	</div>
</template>

<script>
	import { ref } from 'vue';
	export default {
		name: 'ChildComponent',
		async setup() {
			let sum = ref(0);
			let p = new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve({ sum });
				}, 3000);
				console.log(reject);
			});
			return await p;
		},
	};
</script>

<style>
	.child {
		background-color: skyblue;
		padding: 10px;
	}
</style>
