<template>
	<h1>一個人的訊息</h1>
	<h2>姓名：{{ name }}</h2>
	<h2>年齡：{{ age }}</h2>
	<h2>性別：{{ sex }}</h2>
	<!-- @click 為 v-on:click 的簡寫 -->
	<button @click="sayHello">Vue3 寫在setup中呼叫回傳的 sayHello()</button>
	<br />
	<br />
	<button @click="sayWelcome">Vue2 配置的實體方法：sayWelcome()</button>
	<br />
	<br />
	<button @click="vue2ReadData">
		在 Vue2 的 data 配置中去讀取 Vue3 中的數據與方法
	</button>
	<br />
	<br />
	<button @click="vue3ReadData">
		在 Vue3 的 setup 配置中去讀取 Vue2 中的數據與方法（讀取不到）
	</button>
	<h2>如果重複配置同樣的數據，則 a 的值是：{{ a }}</h2>
	<h2>Vue2 跟 Vue3 不要混用，如果重名，則以 Vue3 為主</h2>
	<h2>setup 不能是 saync 函數</h2>
</template>

<script>
	// import { h } from 'vue';
	export default {
		name: 'app',

		// 向下兼容 Vue2，Vue2 是在實體裡面寫 key:value
		data() {
			return {
				sex: 'male',
				a: 'Vue2',
			};
		},
		methods: {
			sayWelcome() {
				alert('歡迎！');
			},
			// 在 Vue2 中是可以輕鬆讀取 Vue3 的數據
			vue2ReadData() {
				alert(this.sex);
				alert(this.name);
				alert(this.age);
				this.sayHello();
			},
		},

		// 此處只是測試一下 setup，暫時不考慮響應式的問題
		// setup 是在函數裡面寫 function
		// 若 setup 返回的是數據、方法 ...，則 template 可以直接呼叫
		setup() {
			// 數據
			let name = 'John';
			let age = 18;
			let a = 'Vue3'; // 重複的值 Vue3 > Vue2

			// 方法
			function sayHello() {
				alert(`我叫${name}，我${age}歲了，你好啊。`);
			}
			// 在 setup 中要記得加 function
			function vue3ReadData() {
				alert(name);
				alert(age);
				sayHello();
				// 上面是自己的，下面是 Vue2 的
				alert(this.sex); // undefiend
				try {
					this.sayWelcome();
				} catch (e) {
					alert(e); // TypeError: this.sayWelcome is not a function
				}
			}

			// 回傳一個實體（重點關注！）
			return {
				name,
				age,
				sayHello,
				// 寫好的 function 記得要回傳
				vue3ReadData,
				// eslint-disable-next-line vue/no-dupe-keys
				a,
			};

			// 回傳一個渲染函數
			// return () => h('h1', 'Jack')
		},
	};
</script>

<style></style>
