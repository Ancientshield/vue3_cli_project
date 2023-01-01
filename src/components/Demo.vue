<template>
	<h1>一個人的資料</h1>
	<h2 v-show="person.name">姓名：{{ person.name }}</h2>
	<h2>年齡：{{ person.age }}</h2>
</template>

<script>
	import { reactive } from 'vue';
	export default {
		name: 'app',
		setup() {
			let person = reactive({
				name: 'Jason',
				age: '18',
			});

			return {
				person,
			};
		},
	};
</script>

<style></style>
