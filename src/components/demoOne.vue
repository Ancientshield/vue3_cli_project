<template>
	<h1>一個人的資料</h1>
	性：<input type="text" v-model="person.firstName" />
	<br />
	名：<input type="text" v-model="person.lastName" />
</template>

<script>
	import { reactive } from 'vue';
	export default {
		name: 'demoOne',
		setup() {
			let person = reactive({
				firstName: 'Jack',
				lastName: 'Lin',
			});

			return {
				person,
			};
		},
	};
</script>

<style></style>
