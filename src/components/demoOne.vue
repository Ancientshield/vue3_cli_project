<template>
	<h1>一個人的資料</h1>
	性：<input type="text" v-model="person.firstName" />
	<br />
	名：<input type="text" v-model="person.lastName" />
	<br />
	全名1：<span>{{ person.fullName }}</span>
	<br />
	全名2：<input type="text" v-model="person.fullName" />
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
			/* Vue3 計算屬性的簡寫形式，沒有考慮計算屬性被修改的情況，修改了會噴錯
				person.fullName = computed(() => {
					return `${person.firstName}-${person.lastName}`;
				});
			*/
			// Vue3 計算屬性的完整寫法，考慮讀和寫
			person.fullName = computed({
				get() {
					return `${person.firstName}-${person.lastName}`;
				},
				set(value) {
					const nameArray = value.split('-');
					person.firstName = nameArray[0];
					person.lastName = nameArray[1];
				},
			});

			return {
				person,
			};
		},
	};
</script>

<style></style>
