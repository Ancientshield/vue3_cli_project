<template>
	<demoOne />
</template>

<script>
	// import 元件不用 curly brackets❗️
	import demoOne from './components/demoOne.vue';
	// import { demoOne } from './components/demoOne.vue'; ...❌
	export default {
		name: 'app',
		// 註冊元件
		components: { demoOne },
	};
</script>

<style></style>
