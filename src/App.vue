<template>
	<h1>一個人的資料</h1>
	<h2 v-show="person.name">姓名：{{ person.name }}</h2>
	<h2>年齡：{{ person.age }}</h2>
	<h2 v-show="person.sex">性別：{{ person.sex }}</h2>
	<h3>職業：{{ person.job.type }}</h3>
	<h3>年薪：{{ person.job.salary }}</h3>
	<h3>
		嗜好：{{ person.hobby[0] }}、{{ person.hobby[1] }}、{{ person.hobby[2] }}
	</h3>
	<h3>測試c值：{{ person.a.b.c }}</h3>
	<button @click="changeInfo">修改人的資料</button>
	<button @click="addSex">新增性別</button>
	<button @click="deleteName">刪除人名</button>
</template>

<script>
	import { reactive } from 'vue';
	export default {
		name: 'app',
		setup() {
			let person = reactive({
				name: 'Jason',
				age: '18',
				job: {
					type: '前端工程師',
					salary: '150w',
				},
				a: {
					b: {
						c: 666,
					},
				},
				hobby: ['吃飯', '睡覺', '打東東'],
			});

			// 方法
			function changeInfo() {
				person.name = 'Bonny';
				person.age = 48;
				person.job.type = 'UI設計師';
				person.job.salary = '160w';
				person.a.b.c = 999;
				person.hobby[2] = '不要打東東';
			}

			function addSex() {
				person.sex = '男';
			}

			function deleteName() {
				delete person.name;
			}
			return {
				changeInfo,
				person,
				// 寫完 function 後記得要加到 return 裡面！
				addSex,
				deleteName,
			};
		},
	};
</script>

<style></style>
