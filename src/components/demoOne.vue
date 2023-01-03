<template>
	<h2>當前求和為：{{ sum }}</h2>
	<button @click="sum++">點我+1</button>
</template>

<script>
	import {
		ref,
		onBeforeMount,
		onMounted,
		onBeforeUpdate,
		onUpdated,
		onBeforeUnmount,
		onUnmounted,
	} from 'vue';
	export default {
		name: 'demoOne',
		setup() {
			console.log('---setup---');
			// 資料
			let sum = ref(0);

			// ❗️通過【組合式API】（Composition API）的形式去使用生命週期鉤子
			/*
			beforeCreate() --> setup() 取代
			created() -------> setup() 取代
			beforeMount() ---> onBeforeMount()
			mounted() -------> onMounted()
			beforeUpdate() --> onBeforeUpdate()
			updated() -------> onUpdated()
			beforeUnmount() -> onBeforeUnmount()
			unmounted() -----> onUnmounted()
			*/
			onBeforeMount(() => {
				console.log('---onBeforeMount---');
			});
			onMounted(() => {
				console.log('---onMounted---');
			});
			onBeforeUpdate(() => {
				console.log('---onBeforeUpdate---');
			});
			onUpdated(() => {
				console.log('---onUpdated---');
			});
			onBeforeUnmount(() => {
				console.log('---onBeforeUnmount---');
			});
			onUnmounted(() => {
				console.log('---onUnmounted---');
			});
			return {
				sum,
			};
		},
		// 透過配置項的形式使用生命週期鉤子
		/*
		beforeCreate() {
			console.log('---beforeCreate---');
		},
		created() {
			console.log('---created---');
		},
		beforeMount() {
			console.log('---beforeMount---');
		},
		mounted() {
			console.log('---mounted---');
		},
		beforeUpdate() {
			console.log('---beforeUpdate---');
		},
		updated() {
			console.log('---updated---');
		},
		beforeUnmount() {
			console.log('---beforeUnmount---');
		},
		unmounted() {
			console.log('---unmounted---');
		},
		*/

		// 已失效
		/* 
		beforeDestroy(){
			console.log('---beforeDestroy---');
		},
		destroyed(){
			console.log('---destroyed---');
		}
		*/
	};
</script>

<style></style>
