<template>
	<div class="child">
		<h3>我是Child子元件</h3>
		<sonComponent />
	</div>
</template>

<script>
	import sonComponent from './sonComponent.vue';
	export default {
		name: 'childComponent',
		// 要記得註冊元件，且值是物件
		components: { sonComponent },
	};
</script>

<style>
	.child {
		background-color: skyblue;
		padding: 10px;
	}
</style>
