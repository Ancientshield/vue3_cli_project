<template>
	<div class="app">
		<!-- 純粹父子元件之間傳資料呢？用 props -->
		<h3>我是App祖先元件，{{ name }}--{{ price }}</h3>
		<!-- v-bind:age="18" 可以簡寫為 :age="18" -->
		<childComponent name="Jack" :age="18" />
	</div>
</template>

<script>
	import childComponent from './components/childComponent.vue';
	import { reactive, toRefs, provide } from 'vue';
	export default {
		name: 'app',
		// 要記得註冊元件，且值是物件
		components: { childComponent },
		setup() {
			let car = reactive({
				name: '賓士',
				price: '200w',
			});
			provide('car', car); //給自己的後代元件傳遞資料
			return { car, ...toRefs(car) };
		},
	};
</script>

<style>
	.app {
		background-color: gray;
		padding: 10px;
	}
</style>
