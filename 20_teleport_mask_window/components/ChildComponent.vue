<template>
	<div class="child">
		<h3>我是ChildComponent元件</h3>
		<SonComponent />
	</div>
</template>

<script>
	import SonComponent from './SonComponent.vue';
	export default {
		name: 'ChildComponent',
		components: { SonComponent },
	};
</script>

<style>
	.child {
		background-color: skyblue;
		padding: 10px;
	}
</style>
