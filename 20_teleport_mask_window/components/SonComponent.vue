<template>
	<div class="son">
		<h3>我是SonComponent元件</h3>
		<DialogComponent />
	</div>
</template>

<script>
	import DialogComponent from './DialogComponent.vue';
	export default {
		name: 'SonComponent',
		components: { DialogComponent },
	};
</script>

<style>
	.son {
		background-color: orange;
		padding: 10px;
	}
</style>
