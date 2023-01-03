// 自定義 hooks 的優勢：重複利用程式碼，讓 setup 中的邏輯更清楚易懂。
import { reactive, onMounted, onBeforeUnmount } from 'vue';
export default function () {
	// 滑鼠點擊座標的資料
	let point = reactive({
		x: 0,
		y: 0,
	});

	// 滑鼠點擊儲存座標的方法
	function savePoint(event) {
		point.x = event.pageX;
		point.y = event.pageY;
		console.log(event.pageX, event.pageY);
	}

	// 滑鼠點擊座標的生命週期鉤子
	onMounted(() => {
		window.addEventListener('click', savePoint);
	});

	onBeforeUnmount(() => {
		window.removeEventListener('click', savePoint);
	});
	// 要返回函數值
	return point;
}
