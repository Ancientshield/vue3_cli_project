<template>
	<div class="child2">
		<h3>我是Child2元件</h3>
		<Son2 />
	</div>
</template>

<script>
	import Son2 from './Son2';
	export default {
		name: 'Child2',
		components: { Son2 },
	};
</script>

<style>
	.child2 {
		background-color: skyblue;
		padding: 10px;
	}
</style>
