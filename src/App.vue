<template>
	<!-- 傳值給 demoOne -->
	<demoOne @hello="showHelloMsg" msg="你好啊" school="台灣大學">
		<template v-slot:qwe>
			<span>醫學系</span>
		</template>
		<template v-slot:asd>
			<span>法律系</span>
		</template>
	</demoOne>
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
		setup() {
			function showHelloMsg(value) {
				alert(`你好啊，你觸發了hello事件，我收到的參數是：${value}`);
			}
			return {
				showHelloMsg,
			};
		},
	};
</script>

<style></style>
