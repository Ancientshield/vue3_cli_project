<template>
	<div>
		<button @click="isShow = true">點我彈出視窗</button>
		<div v-if="isShow" class="dialog">
			<h3>我是一個彈出視窗</h3>
			<h4>一些內容</h4>
			<h4>一些內容</h4>
			<h4>一些內容</h4>
			<h4>一些內容</h4>
			<button @click="isShow = false">關閉彈出視窗</button>
		</div>
	</div>
</template>

<script>
	import { ref } from 'vue';
	export default {
		name: 'DialogComponent',
		setup() {
			let isShow = ref(false);
			return { isShow };
		},
	};
</script>

<style>
	.dialog {
		width: 300px;
		height: 300px;
		background-color: green;
	}
</style>
