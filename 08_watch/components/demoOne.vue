<template>
	<h2>當前求和為：{{ sum }}</h2>
	<br />
	<button @click="sum++">點我+1</button>
	<hr />
	<h2>當前的資料為：{{ msg }}</h2>
	<button @click="msg += '!'">修改資料</button>
	<hr />
	<h2>姓名：{{ person.name }}</h2>
	<h2>年齡：{{ person.age }}</h2>
	<h2>薪資：{{ person.job.j1.salary }}K</h2>
	<button @click="person.name += '~'">修改姓名</button>
	<button @click="person.age++">增加年齡</button>
	<button @click="person.job.j1.salary++">加薪</button>
</template>

<script>
	import { ref, watch, reactive } from 'vue';
	export default {
		name: 'demoOne',
		setup() {
			// 資料
			let sum = ref(0);
			let msg = ref('你好啊');
			let person = reactive({
				name: 'Jack',
				age: 18,
				job: {
					j1: {
						salary: 70,
					},
				},
			});

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
			/*
			watch(
				[sum, msg],
				(newValue, oldValue) => {
					console.log('sum或msg變了', newValue, oldValue);
				},
				{ immediate: true }
			);
			*/

			// 情況三：監視 reactive 所定義的【全部】響應式資料。
			/*
			注意❗️1. 此處無法正確獲得 oldValue
			注意❗️2. 強制開啟深度監視，{deep: false} 無效。
			watch(
				person,
				(newValue, oldValue) => {
					console.log('person變了', newValue, oldValue);
				},
				{ deep: false } // 無法關閉深度監視
			);
			*/

			// 情況四：監視 reactive 所定義的【一個】響應式資料，第一個參數要寫成箭頭函數才行。
			/*
			watch(
				() => person.age,
				(newValue, oldValue) => {
					console.log('person.age變了', newValue, oldValue);
				}
			);
			*/

			// 情況五：監視 reactive 所定義的【某些】響應式資料，情況二＋情況四。
			watch([() => person.name, () => person.age], (newValue, oldValue) => {
				console.log('person的name或age變了', newValue, oldValue);
			});

			// 特殊情況：監視 reactive 定義某個屬性的物件（object）
			// 注意❗️此處與情況三相同，無法正確獲得 oldValue
			watch(
				() => person.job,
				(newValue, oldValue) => {
					console.log('salary變了', newValue, oldValue);
				},
				{ deep: true } // 此處需要開啟深度監視
			);

			// 總結：一般開發用情況三就足夠了。

			return {
				sum,
				msg,
				person,
			};
		},
	};
</script>

<style></style>
