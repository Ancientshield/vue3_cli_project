<template>
	<div class="son">
		<h3>我是Son孫元件，inject--{{ car.name }}--{{ car.price }}</h3>
	</div>
</template>

<script>
	import { inject } from 'vue';
	export default {
		name: 'SonComponent',
		setup() {
			let car = inject('car');
			return { car };
		},
	};
</script>

<style>
	.son {
		background-color: orange;
		padding: 10px;
	}
</style>
