<template>
	<demoOne></demoOne>
</template>

<script>
	import demoOne from './components/demoOne.vue';
	// import 元件不用 curly brackets❗️
	// import { demoOne } from './components/demoOne.vue'; ...❌
	// import { reactive } from 'vue';
	export default {
		name: 'app',
		// 註冊元件
		components: { demoOne },
	};
</script>

<style></style>
