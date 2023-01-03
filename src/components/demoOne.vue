<template>
	<h2>姓名：{{ person.name }}</h2>
	<h2>年齡：{{ person.age }}</h2>
	<h2>薪資：{{ person.job.j1.salary }}K</h2>
	<button @click="person.name += '~'">修改姓名</button>
	<button @click="person.age++">增加年齡</button>
	<button @click="person.job.j1.salary++">加薪</button>
</template>

<script>
	import { reactive } from 'vue';
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

			return {
				person,
			};
		},
	};
</script>

<style></style>
