<template>
	<h2>當前求和為：{{ sum }}</h2>
	<br />
	<button @click="sum++">點我+1</button>
	<hr />
	<h2>當前的資料為：{{ msg }}</h2>
	<button @click="msg += '!'">修改資料</button>
</template>

<script>
	import { ref, watch } from 'vue';
	export default {
		name: 'demoOne',
		setup() {
			// 資料
			let sum = ref(0);
			let msg = '你好啊';

			// 情況一：監視 ref 所定義的【一個】響應式資料
			/* 
			watch(
				sum,
				(newValue, oldValue) => {
					console.log('sum變了', newValue, oldValue);
				},
				{ immediate: true }
			);
			*/

			// 情況二：監視 ref 所定義的【多個】響應式資料
			watch(
				[sum, msg],
				(newValue, oldValue) => {
					console.log('sum或msg變了', newValue, oldValue);
				},
				{ immediate: true }
			);

			return {
				sum,
				msg,
			};
		},
	};
</script>

<style></style>
