<template>
	<h4>{{ person }}</h4>
	<h2>姓名：{{ name }}</h2>
	<h2>年齡：{{ age }}</h2>
	<h2>薪資：{{ job.j1.salary }}K</h2>
	<button @click="name += '~'">修改姓名</button>
	<button @click="age++">增加年齡</button>
	<button @click="job.j1.salary++">加薪</button>
</template>

<script>
	import { reactive, toRefs } from 'vue';
	// import { toRef } from 'vue';
	export default {
		name: 'demoOne',
		setup() {
			let person = reactive({
				name: 'Jack',
				age: 18,
				job: {
					j1: {
						salary: 70,
					},
				},
			});
			// toRef 的使用方式，反正記得 return 內的東西是物件
			// return 內若用 ref，則無法修改到真實的 person 物件，參考Vue全家桶影片157 19:42
			return {
				person,
				// 真實開發可能 person 物件很大一包，這種寫法可以單獨把少數幾個屬性拆出來
				/*
				name: toRef(person, 'name'),
				age: toRef(person, 'age'),
				salary: toRef(person.job.j1, 'salary'),
				*/
				// ✨要拆的物件有20個呢？✨
				...toRefs(person),
				// 雖然好用，但只會解析第一層，但還是可以替 template 省掉很多的點
			};
		},
	};
</script>

<style></style>
