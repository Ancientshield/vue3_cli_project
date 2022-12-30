<template>
	<h1>一個人的訊息</h1>
	<h2>姓名：{{ name }}</h2>
	<h2>年齡：{{ age }}</h2>
	<button @click="sayHello">說話</button>
</template>

<script>
	import { h } from 'vue';
	export default {
		name: 'app',

		// 此處只是測試一下 setup，暫時不考慮響應式的問題
		// 若 setup 返回的是數據、方法 ...，則 template 可以直接呼叫
		setup() {
			// 數據
			let name = 'John';
			let age = 18;

			// 方法
			function sayHello() {
				alert(`我叫${name}，我${age}歲了，你好啊。`);
			}

			// 回傳一個實體（重點關注！）
			return {
				name,
				age,
				sayHello,
			};

			// 回傳一個渲染函數
			// return () => h('h1', 'Jack')
		},
	};
</script>

<style></style>
