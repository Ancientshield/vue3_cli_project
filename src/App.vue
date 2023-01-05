<template>
	<div class="app">
		<h3>我是App祖先元件</h3>
		<Child />
		<Child2 />
	</div>
</template>

<script>
	import Child from './components/Child';
	import Child2 from './components/Child2';
	export default {
		name: 'App',
		components: { Child, Child2 },
	};
</script>

<style>
	.app {
		background-color: gray;
		padding: 10px;
	}
</style>
