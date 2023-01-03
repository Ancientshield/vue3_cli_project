<template>
	<button @click="isShowDemo = !isShowDemo">切換隱藏/顯示</button>
	<demoOne v-if="isShowDemo" />
</template>

<script>
	// import 元件不用 curly brackets❗️
	// import { demoOne } from './components/demoOne.vue'; ...❌
	import demoOne from './components/demoOne.vue';
	import { ref } from 'vue';
	export default {
		name: 'app',
		// 註冊元件
		components: { demoOne },
		setup() {
			let isShowDemo = ref(true);
			return {
				isShowDemo,
			};
		},
	};
</script>

<style></style>
