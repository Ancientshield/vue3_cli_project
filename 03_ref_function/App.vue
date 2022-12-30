<template>
	<h1>一個人的資料</h1>
	<!-- remplate 會自動解析，發現 name 是 RefImpl 的物件，就會自動調用 value -->
	<h2>姓名：{{ name }}</h2>
	<h2>年齡：{{ age }}</h2>
	<!-- 一般的物件取值就要用『.』-->
	<h3>職業：{{ job.type }}</h3>
	<h3>年薪：{{ job.salary }}</h3>
	<button @click="changeInfo">修改人的資料</button>
</template>

<script>
	import { ref } from 'vue';
	export default {
		name: 'app',

		// setup 是在函數裡面寫 function
		// 若 setup 返回的是數據、方法 ...，則 template 可以直接呼叫
		setup() {
			// 這是非響應式資料！
			// let name = 'John';
			// let age = 18;

			// 用 ref 定義響應式資料
			// vue3 的 get_value、set_value 藏在 RefImpl（Reference Implement Object）的 prototype 裡面了
			// // RefImpl 會自動把資料變成 ‣RefImpl {get set ..., value} 物件
			let name = ref('John');
			let age = ref(18);

			// 物件被 RefImpl 加工轉成 ‣Proxy {name: 'Jason',type: '前端工程師', salary: '150w'} 代理物件
			let job = ref({
				name: 'Jason',
				type: '前端工程師',
				salary: '150w',
			});

			// 方法
			function changeInfo() {
				// name = 'Marry';
				// age = '40';

				// ref 加工完的值是一個 RefImpl（Reference Implement Object）
				// console.log(name, age);
				// name.value = 'Marry';
				// age.value = '40';

				// Vue2 使用 _data constructor 建立 class，使用 Object.defineProperty() 的 get、set
				// Vue3 則是 reactive function
				// console.log(name.value, age.value);

				name.value = 'Bonny';
				age.value = 48;
				job.value.type = 'UI設計師';
				job.value.salary = '160w';
			}

			// 回傳一個物件（重點關注！）
			return {
				name,
				age,
				changeInfo,
				job,
			};
		},
	};
</script>

<style></style>
