<template>
	<h4>當前的 x.y 值是：{{ x.y }}</h4>
	<button @click="x = { y: 888 }">點我替換x</button>
	<!-- 下面的 button 無效，因為是 shallowRef -->
	<button @click="x.y++">點我x.y++</button>
	<hr />
	<h4>{{ person }}</h4>
	<h2>姓名：{{ name }}</h2>
	<h2>年齡：{{ age }}</h2>
	<h2>薪資：{{ job.j1.salary }}K</h2>
	<button @click="name += '~'">修改姓名</button>
	<button @click="age++">增加年齡</button>
	<button @click="job.j1.salary++">加薪</button>
</template>

<script>
	import { toRefs, reactive, shallowRef } from 'vue';
	// import { toRef } from 'vue';
	export default {
		name: 'demoOne',
		setup() {
			// shallowReactive：只處理物件類型內第一層的響應式
			// let person = shallowReactive({
			let person = reactive({
				name: 'Jack',
				age: 18,
				job: {
					j1: {
						salary: 70,
					},
				},
			});

			// shallowRef 只能處理基本資料類型，不能處理物件響應式
			let x = shallowRef({
				y: 0,
			});

			/* ❗️結論
				如果物件中的資料，結構很深，但只有第一層在變化，可使用 shallowReactive
				如果物件中的資料是單純的字串、數字，後續也不會修改該物件中的屬性，則可使用 shallowRef
			*/

			return {
				/*
				name: toRef(person, 'name'),
				age: toRef(person, 'age'),
				salary: toRef(person.job.j1, 'salary'),
				*/
				person,
				...toRefs(person),
				x,
			};
		},
	};
</script>

<style></style>
