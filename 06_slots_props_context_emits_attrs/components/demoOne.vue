<template>
	<h1>一個人的資料</h1>
	<h2>姓名：{{ person.name }}</h2>
	<h2>年齡：{{ person.age }}</h2>
	<!-- slot 的簡單範例，接收父元件設定的插槽 -->
	<h2>學系：<slot name="qwe"></slot></h2>
	<h2>學系：<slot name="asd"></slot></h2>
	<button @click="test">測試觸發父元件中Demo元件的Hello事件</button>
</template>

<script>
	import { reactive } from 'vue';
	export default {
		name: 'demoOne',

		// 為父元件 App 對子元件 demoOne 傳值，一樣是透過 Proxy 建立代理實體物件傳遞
		// 宣告 props 陣列屬性來接收 Proxy 傳值，只指定名稱
		props: ['msg', 'school'],
		// 除了可以接收陣列外，也可以接受物件屬性類型，指定名稱和類型
		/* 官網範例：
		  props: {
    		title: String,
    		likes: Number
  		}
			或者指定名稱、類型和預設值
			props: {
				name: {type: String, required: true, default: 'Marry'},
			}
		*/

		/* 
			要在子元件中加入 emits 屬性告訴父元件，
			子元件也綁定了在父元件中定義子元件 <demoOne @hello="..." /> 的 hello 事件，
			否則會觸發警告！
		*/
		emits: ['hello'],

		beforeCreate() {
			console.log('---beforeCreate---');
		},

		// setup() {
		// console.log('---setup---', this); // undefind
		setup(props, context) {
			// console.log('---setup---', props); // ‣Proxy {"msg": "你好啊", "school": "台灣大學"}
			// console.log('---setup---', context); // ‣{expose: f} 物件，重點關注裡面的 attrs、emit、slots
			// console.log('---setup---', context.attrs); // attrs 是接 props 裏面沒宣告的東西（相當於 Vue2 的 $attrs）
			// console.log('---setup---', context.emit); // 觸發父元件中在 template 中子元件的自定義事件
			console.log('---setup---', context.slots); // 收到父元件的 v-slots:

			// 資料
			let person = reactive({
				name: 'Jason',
				age: '18',
			});

			// 綁定父元件 hello 事件 context.emit('hello'); 傳值 666 給父元件
			// 這裡只是將觸發的方法命名為 test() 而已
			function test() {
				context.emit('hello', 666);
			}

			// ❗️總結：props -> 接收父元件參數，emits -> 綁定父元件事件，attrs -> 收集漏接參數

			return {
				person,
				test,
				context,
			};
		},
	};
</script>

<style></style>
