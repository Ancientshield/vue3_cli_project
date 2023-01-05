<template>
	<div class="app">
		<h3>我是App组件</h3>
		<Suspense>
			<template v-slot:default>
				<Child />
			</template>
			<template v-slot:fallback>
				<h3>稍等，讀取中...</h3>
			</template>
		</Suspense>
	</div>
</template>

<script>
	// import Child from './components/Child.vue' // 靜態引入
	import { defineAsyncComponent } from 'vue';
	const Child = defineAsyncComponent(() => import('./components/Child')); // 動態引入 or 異步引入
	export default {
		name: 'App',
		components: { Child },
	};
</script>

<style>
	.app {
		background-color: gray;
		padding: 10px;
	}
</style>
