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
	import { ref, watch } from 'vue';
	export default {
		name: 'demoOne',
		setup() {
			// 資料
			let sum = ref(0);
			let msg = ref('你好啊');
			// 這裡改成 ref
			let person = ref({
				name: 'Jack',
				age: 18,
				job: {
					j1: {
						salary: 70,
					},
				},
			});

			// 純粹的值，不能.value
			watch(sum, (newValue, oldValue) => {
				console.log('sum的值變化了', newValue, oldValue);
			});

			/*
				ref 定義的物件是 RefImpl，reactive 是 Proxy
				硬要用 watch 監視 person 物件，則 watch(person.value, ...) 就要點 value
				因為就算不用 reactive，Vue3 也會自動將 person 物件轉成 Proxy
			*/
			// watch(person.value, (newValue, oldValue) => {
			// 	console.log('person的值變化了', newValue, oldValue);
			// });

			// 若不用.value，也可將被轉成 Proxy 的物件開啟深度監視。
			watch(
				person,
				(newValue, oldValue) => {
					console.log('person的值變化了', newValue, oldValue);
				},
				{ deep: true }
			);

			return {
				sum,
				msg,
				person,
			};
		},
	};
</script>

<style></style>
