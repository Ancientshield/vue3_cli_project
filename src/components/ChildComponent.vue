<template>
	<div class="child">
		<h3>我是Child子元件</h3>
		<SonComponent />
	</div>
</template>

<script>
	import SonComponent from './SonComponent.vue';
	export default {
		name: 'ChildComponent',
		// 要記得註冊元件，且值是物件
		components: { SonComponent },
	};
</script>

<style>
	.child {
		background-color: skyblue;
		padding: 10px;
	}
</style>
