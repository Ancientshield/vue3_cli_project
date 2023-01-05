<template>
	<div class="app">
		<h3>我是App祖先元件</h3>
		<ChildComponent />
	</div>
</template>

<script>
	// import from 最好還是完整檔名，沒有完整檔名有時候會出錯
	import ChildComponent from './components/ChildComponent.vue';
	export default {
		name: 'App',
		components: { ChildComponent },
	};
</script>

<style>
	.app {
		background-color: gray;
		padding: 10px;
	}
</style>
