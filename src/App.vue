<template>
	<div class="app">
		<!-- 純粹父子元件之間傳資料呢？用 props -->
		<h3>我是App祖先元件</h3>
		<ChildComponent />
	</div>
</template>

<script>
	import ChildComponent from './components/ChildComponent';
	export default {
		name: 'app',
		components: { ChildComponent },
	};
</script>

<style>
	.app {
		background-color: gray;
		padding: 10px;
	}
</style>
