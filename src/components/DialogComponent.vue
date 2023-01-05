<template>
	<div>
		<button @click="isShow = true">點我彈出視窗</button>
		<!-- teleport 的用法，可以讓後代元件不受祖元件CSS影響，直接綁定在 body 上。 -->
		<teleport to="body">
			<div v-if="isShow" class="mask">
				<div class="dialog">
					<h3>我是一個彈出視窗</h3>
					<h4>一些內容</h4>
					<h4>一些內容</h4>
					<h4>一些內容</h4>
					<h4>一些內容</h4>
					<button @click="isShow = false">關閉彈出視窗</button>
				</div>
			</div>
		</teleport>
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
	.mask {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.5);
	}

	.dialog {
		width: 300px;
		height: 300px;
		background-color: green;
		text-align: center;
		/* 定位在 body */
		position: absolute;
		/* 從框框左上(0,0)算起 */
		top: 50%;
		left: 50%;
		/* 所以要想辦法再讓框框居中，transform 的定位在自己身上 */
		transform: translate(-50%, -50%);
	}
</style>
