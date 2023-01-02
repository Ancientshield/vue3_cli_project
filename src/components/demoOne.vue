<template>
	<h1>一個人的資料</h1>
	性：<input type="text" v-model="person.firstName" />
	<br />
	名：<input type="text" v-model="person.lastName" />
	<br />
	<span>{{ person.fullName }}</span>
</template>

<script>
	// import { reactive } from 'vue';
	// Vue3
	import { reactive, computed } from 'vue';
	export default {
		name: 'demoOne',
		/*
		// 這是 Vue2 的寫法，不要寫
		computed: {
			fullName() {
				return `${this.person.firstName}-${this.person.lastName}`;
			},
		},
		*/
		setup() {
			let person = reactive({
				firstName: 'Jack',
				lastName: 'Lin',
			});

			// Vue3 計算屬性的簡寫，沒有考慮計算屬性被修改的情況
			person.fullName = computed(() => {
				return `${person.firstName}-${person.lastName}`;
			});

			return {
				person,
			};
		},
	};
</script>

<style></style>
