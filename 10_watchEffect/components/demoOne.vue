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
	import { ref, reactive, watchEffect } from 'vue';
	export default {
		name: 'demoOne',
		setup() {
			// 資料
			let sum = ref(0);
			let msg = ref('你好啊');
			// 這裡改成 ref
			let person = reactive({
				name: 'Jack',
				age: 18,
				job: {
					j1: {
						salary: 70,
					},
				},
			});

			// 監視 watch 三個參數：1.監視的是誰 2.監視的cbFn 3.監視的設定
			/*
			watch(
				sum,
				(newValue, oldValue) => {
					console.log('sum的值變化了', newValue, oldValue);
				},
				{ immediate: true }
			);
			*/

			// 我不說我監視誰，我用誰，watchEffect 就監視誰
			/*
				1. watch 要指名監視的屬性，也要指名監視的 callback Function
				2. watchEffect ❗️【不用】指名監視哪個屬性。監視的 cbFn 中用哪個屬性，就監視該屬性
				3. watchEffect 有點像 computed，但：
					a. computed 注重計算出來的值，所以必須寫返回值
					b. watchEffect 更注重過程（cbFn 是哪個 function），所以不用寫返回值
			*/
			watchEffect(() => {
				const x1 = sum.value;
				const x2 = person.job.j1.salary;
				console.log(`watchEffect所指定的callbackFn、${x1}、${x2}`);
			});

			return {
				sum,
				msg,
				person,
			};
		},
	};
</script>

<style></style>
